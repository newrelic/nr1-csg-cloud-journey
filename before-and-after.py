#!/usr/bin/python

#This script creates either a before (On-Prem) or after (AWS) Nerdpack out of the Cloud Journey Nerdpack.
#This is for customers who have all of their On-Prem assets under one New Relic account and their AWS assets under another New Relic account.

import os
import json
import sys
import shutil

if len(sys.argv) < 2:
	print "Usage: python before-and-after.py <before|after>"
	sys.exit(1)

if sys.argv[1] != "before" and sys.argv[1] != "after":
	print "Usage: python before-and-after.py <before|after>"
	sys.exit(1)

#Remove splash screen and post-migration tabs if this is being installed on-prem only
if sys.argv[1] == "before":
	shutil.copyfile("nerdlets/nr1-csg-cloud-journey-nerdlet/splash.js.before","nerdlets/nr1-csg-cloud-journey-nerdlet/splash.js")
	shutil.copyfile("nerdlets/nr1-csg-cloud-journey-nerdlet/components/cloud-journey/index.js.before","nerdlets/nr1-csg-cloud-journey-nerdlet/components/cloud-journey/index.js")

dashboards_dir = "./nerdlets/nr1-csg-cloud-journey-nerdlet/components/insights-dashboard/dashboards/"

dashboards = os.listdir(dashboards_dir)

for dashboard in dashboards:
	row = 1
	if not dashboard.endswith(".json"):
		continue
	fbuffer = open(dashboards_dir + dashboard)
	data = fbuffer.read()
	fbuffer.close()
	#If this dashboard does not contain On-Prem or AWS specific queries, skip it
	if (data.count("_AWS") <= 0) and (data.count("_OP") <= 0):
		continue
	if data.count("DEADBEEF") >= 1:
		data = data.replace("DEADBEEF","12345678")
	data = json.loads(data)
	widgets = data['widgets']
	new_widgets = []
	#modify nrql queries and adjust layout
	col = 1
	for widget in widgets:
		if widget['nrql'] is None:
			widget['row'] = row
			width = widget['width']
			widget['column'] = col
			col = col + width
			if col > 3:
				row = row + 1 
				col = 1
			new_widgets.append(widget)
			continue
		if sys.argv[1] == "before":
			#Omit charts displaying both on-prem and AWS data
			if ("_OP" in widget['nrql']) and ("_AWS" in widget['nrql']):
				continue
			elif ("_AWS" in widget['nrql']):
				continue
			elif ("Ec2Instance" in widget['nrql']):
				continue
			else:
				widget['row'] = row
				width = widget['width']
				widget['column'] = col
				col = col + width
				if col > 3:
					row = row + 1 
					col = 1
				widget['nrql'] = widget['nrql'].replace("appName LIKE '%_OP'","appName LIKE '%'")
				new_widgets.append(widget)
		elif sys.argv[1] == "after":
			#Omit charts displaying both on-prem and AWS data
			if ("_OP" in widget['nrql']) and ("_AWS" in widget['nrql']):
				continue
			elif ("_OP" in widget['nrql']):
				continue
			elif ("Premise" in widget['nrql']) or ("Premise" in widget['title']) or ("Combined" in widget['title']):
				continue
			else:
				widget['row'] = row
				width = widget['width']
				widget['column'] = col
				col = col + width
				if col > 3:
					row = row + 1 
					col = 1
				widget['nrql'] = widget['nrql'].replace("appName LIKE '%_AWS'","appName LIKE '%'")
				new_widgets.append(widget)
	data['widgets'] = new_widgets
	data = json.dumps(data)
	if data.count("12345678") >= 1:
		data = data.replace("12345678","DEADBEEF")
	fbuffer = open(dashboards_dir + dashboard,"w")
	data = fbuffer.write(data)
	fbuffer.close()
