#!/usr/bin/python

import sys
import os

nerdlet = "nerdlets/nr1-csg-cloud-journey-nerdlet/components/cloud-journey/index.js"
dashboards_dir = "nerdlets/nr1-csg-cloud-journey-nerdlet/components/insights-dashboard/dashboards/"
dashboards = os.listdir(dashboards_dir)
modernization_nerdlet_config = "nerdlets/nr1-csg-cloud-journey-nerdlet/components/cloud-journey/components/modernization/modernization-patterns/accounts.js" 

account_number = raw_input("Please provide the account number where this nerdlet is being deployed and then press ENTER: ")
acount_number = account_number.strip()

#Add account number to nerdlet main view
fbuffer = open(nerdlet)
data = fbuffer.read()
fbuffer.close()

data = data.replace("DEADBEEF",account_number)

fbuffer = open(nerdlet,'w')
fbuffer.write(data)
fbuffer.close()

#Add account number to each dashboard
for dashboard in dashboards:
	fbuffer = open(dashboards_dir + dashboard)
	data = fbuffer.read()
	fbuffer.close()
	
	data = data.replace("DEADBEEF",account_number)
	
	fbuffer = open(dashboards_dir + dashboard,'w')
	fbuffer.write(data)
	fbuffer.close()

insights_query_key = raw_input("Please provide a valid Insights query key and then press ENTER: ")
insights_query_key = insights_query_key.strip()

#Update modernization nerdlet config
fbuffer = open(modernization_nerdlet_config)
data = fbuffer.read()
fbuffer.close()

data = data.replace("<ACCOUNT_NUMBER>",account_number)
data = data.replace("<INSIGHTS_QUERY_KEY>",insights_query_key)

fbuffer = open(modernization_nerdlet_config,'w')
fbuffer.write(data)
fbuffer.close()
