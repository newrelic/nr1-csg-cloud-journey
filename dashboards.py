#!/usr/bin/python

import os
import json

dashboards_dir = "/Users/bthomason/nerdlets/cloud-journey/nr1-csg-cloud-journey/nerdlets/nr1-csg-cloud-journey-nerdlet/components/insights-dashboard/dashboards/"

dashboards = os.listdir(dashboards_dir)

for dashboard in dashboards:
	if not dashboard.endswith(".json"):
		continue
	fbuffer = open(dashboards_dir + dashboard)
	data = fbuffer.read()
	fbuffer.close()
	if data.count("DEADBEEF") >= 1:
		data = data.replace("DEADBEEF","12345678")
	data = json.loads(data)
	widgets = data['widgets']
	print "## " + dashboard
	for widget in widgets:
		if widget['nrql'] is None:
			continue
		print ">" + widget['nrql']
		print
