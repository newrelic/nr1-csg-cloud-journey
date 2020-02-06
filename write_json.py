#!/usr/bin/python

import json

queries = []
counter = 0

query = {}
query['id'] = counter
query['name'] = 'OS Upgrade Candidates: Outdated versus Up-To-Date Amazon Linux AMI view'
query['type'] = 'list'
query['view'] = 'side-by-side'
query['description'] = 'The latest and final release of the original Amazon Linux AMI occurred in March of 2018.  It is highly recommended that any instances using this AMI are migrated to Amazon Linux 2.'
query['chart'] = {'type': 'PieChart', 'query': "FROM SystemSample SELECT uniqueCount(hostname) AS 'Hosts' FACET cases(WHERE linuxDistribution LIKE 'Amazon Linux AMI 2018.03' AS Outdated, WHERE linuxDistribution LIKE 'Amazon Linux 2' AS 'Up-to-date')"}
query['queries'] = []
query['queries'].append({'name': "Operating System: Amazon Linux 1",'value': "FROM ComputeSample SELECT latest(linuxDistribution) AS 'Linux Distro' WHERE linuxDistribution LIKE '%Amazon%201%' FACET hostname LIMIT 2000"})
query['queries'].append({'name': "Operating System: Amazon Linux 2",'value': "FROM ComputeSample SELECT latest(linuxDistribution) AS 'Linux Distro' WHERE linuxDistribution LIKE '%Amazon Linux 2%' FACET hostname LIMIT 2000"})

queries.append(query)
counter = counter + 1

query = {}
query['id'] = counter
query['name'] = 'OS Upgrade Candidates: Instances running old Amazon Linux AMIs'
query['type'] = 'list'
query['view'] = 'top-to-bottom'
query['description'] = 'The latest and final release of the original Amazon Linux AMI occurred in March of 2018.  It is highly recommended that any instances using this AMI are migrated to Amazon Linux 2.'
query['chart'] = {'type': 'PieChart', 'query': "FROM SystemSample SELECT uniqueCount(hostname) AS 'Hosts' FACET cases(WHERE linuxDistribution LIKE 'Amazon Linux AMI 2018.03' AS Outdated, WHERE linuxDistribution LIKE 'Amazon Linux 2' AS 'Up-to-date')"}
query['queries'] = []
query['queries'].append({'name': "Outdated OS: Amazon Linux",'value': "FROM ComputeSample SELECT latest(linuxDistribution) WHERE operatingSystem = 'linux' AND linuxDistribution LIKE '%Amazon%201%' FACET hostname LIMIT 2000"})

queries.append(query)
counter = counter + 1

query = {}
query['id'] = counter
query['name'] = 'OS Upgrade Candidates: Ubuntu'
query['type'] = 'list'
query['view'] = 'top-to-bottom'
query['description'] = 'Ubuntu releases a new version of their distribution every six months with LTS (Long Term Support) releases occuring every two years.  Regular releases are supported for only 9 months while LTS versions are supported for 5 years.  Ideally, servers should only run LTS releases and any version listed below with a version less than 16.04 should be upgraded as security updates are no longer being provided for older versions.'
query['chart'] = {'type': 'PieChart', 'query': "FROM SystemSample SELECT uniqueCount(hostname) AS 'Instance Count' WHERE linuxDistribution LIKE '%Ubuntu%' FACET linuxDistribution AS 'Linux Distro'"}
query['queries'] = []
query['queries'].append({'name': "Linux Hosts: Ubuntu",'value': "FROM SystemSample SELECT uniqueCount(hostname) AS 'Instance Count' WHERE linuxDistribution LIKE '%Ubuntu%' FACET linuxDistribution AS 'Linux Distro'"})

queries.append(query)
counter = counter + 1

query = {}
query['id'] = counter
query['name'] = 'OS Upgrade Candidates: CentOS'
query['type'] = 'list'
query['view'] = 'top-to-bottom'
query['description'] = 'CentOS is a Linux distribution that provides a free, community-supported computing platform functionally compatible with its upstream source, Red Hat Enterprise Linux (RHEL). Like RHEL, releases are supported for approximately 10 years with the latest version being 8.0.  Versions before 6.x are no longer supported.'
query['chart'] = {'type': 'PieChart', 'query': "FROM SystemSample SELECT uniqueCount(hostname) AS 'Instance Count' WHERE linuxDistribution LIKE '%Cent%' FACET linuxDistribution AS 'Linux Distro'"}
query['queries'] = []
query['queries'].append({'name': "Linux Hosts: CentOS",'value': "FROM SystemSample SELECT uniqueCount(hostname) AS 'Instance Count' WHERE linuxDistribution LIKE '%Cent%' FACET linuxDistribution AS 'Linux Distro'"})

queries.append(query)
counter = counter + 1

query = {}
query['id'] = counter
query['name'] = 'OS Upgrade Candidates: RHEL'
query['type'] = 'list'
query['view'] = 'top-to-bottom'
query['description'] = 'Red Hat Enterprise Linux (RHEL) releases are supported for approximately 10 years with the latest version being 8.0.  Versions before 6.x are no longer supported.'
query['chart'] = {'type': 'PieChart', 'query': "FROM SystemSample SELECT uniqueCount(hostname) AS 'Instance Count' WHERE linuxDistribution LIKE '%rhel%' FACET linuxDistribution AS 'Linux Distro'"}
query['queries'] = []
query['queries'].append({'name': "Linux Hosts: RHEL",'value': "FROM SystemSample SELECT uniqueCount(hostname) AS 'Instance Count' WHERE linuxDistribution LIKE '%rhel%' FACET linuxDistribution AS 'Linux Distro'"})

queries.append(query)
counter = counter + 1

query = {}
query['id'] = counter
query['name'] = 'OS Upgrade Candidates: SuSE'
query['type'] = 'list'
query['view'] = 'top-to-bottom'
query['description'] = 'SuSE supports its SuSE Linux Enterprise releases for a period of 13 years.  The latest release is version 15 while the oldest supported release is version 11.4.'
query['chart'] = {'type': 'PieChart', 'query': "FROM SystemSample SELECT uniqueCount(hostname) AS 'Instance Count' WHERE linuxDistribution LIKE '%suse%' FACET linuxDistribution AS 'Linux Distro'"}
query['queries'] = []
query['queries'].append({'name': "Linux Hosts: SuSE",'value': "FROM SystemSample SELECT uniqueCount(hostname) AS 'Instance Count' WHERE linuxDistribution LIKE '%suse%' FACET linuxDistribution AS 'Linux Distro'"})

queries.append(query)
counter = counter + 1

query = {}
query['id'] = counter
query['name'] = 'OS Upgrade Candidates: Debian'
query['type'] = 'list'
query['view'] = 'top-to-bottom'
query['description'] = 'Debian GNU/Linux, is a Linux distribution composed of free and open-source software, developed by the community-supported Debian Project. Debian releases roughly every two years and supports its releases for a minimum of five years.  The latest version of Debian is 11 while the latest supported release is version 8.'
query['chart'] = {'type': 'PieChart', 'query': "FROM SystemSample SELECT uniqueCount(hostname) AS 'Instance Count' WHERE linuxDistribution LIKE '%Debian%' FACET linuxDistribution AS 'Linux Distro'"}
query['queries'] = []
query['queries'].append({'name': "Linux Hosts: Debian",'value': "FROM SystemSample SELECT uniqueCount(hostname) AS 'Instance Count' WHERE linuxDistribution LIKE '%Debian%' FACET linuxDistribution AS 'Linux Distro'"})

queries.append(query)
counter = counter + 1

query = {}
query['id'] = counter
query['name'] = 'OS Upgrade Candidates: Windows'
query['type'] = 'list'
query['view'] = 'top-to-bottom'
query['description'] = 'Microsoft supports Windows Server releases for a period of 10 years.  The latest version of Windows Server is 2019 while the latest supported release is version 2012.'
query['chart'] = {'type': 'PieChart', 'query': "FROM SystemSample SELECT uniqueCount(hostname) AS 'Instance Count' WHERE windowsFamily IS NOT NULL LIKE FACET windowsVersion AS 'Windows Version'"}
query['queries'] = []
query['queries'].append({'name': "Windows Hosts: Versions",'value': "FROM SystemSample SELECT uniqueCount(hostname) AS 'Instance Count' WHERE windowsFamily IS NOT NULL LIKE FACET windowsVersion AS 'Windows Version'"})

queries.append(query)
counter = counter + 1

query = {}
query['id'] = counter
query['name'] = 'Lambda Candidates: Instances with < 20% CPU Utilization'
query['type'] = 'drilldown'
query['view'] = 'side-by-side'
query['description'] = 'Hosts with very low CPU usage indicate an underutilized server running a handful of processes that could potentially be migrated to AWS Lambda. <BR /><BR />The chart below shows average CPU Utilization by Instance Type.<BR /><BR />The first table displays a list of instances with an average CPU utilization of less than 20%.<BR /><BR />The second table shows the applications running on those hosts.'
query['chart'] = {'type': 'BarChart', 'query': "FROM ComputeSample SELECT average(provider.cpuUtilization.Average) AS 'Average Utilization %' WHERE provider = 'Ec2Instance' FACET ec2InstanceType"}
query['queries'] = []
query['queries'].append({'name': "Average CPU Utilization: < 20%",'value': "FROM ComputeSample SELECT latest(provider.cpuUtilization.Average) AS 'AVG CPU Utilization' WHERE provider.cpuUtilization.Average < 20 FACET hostname LIMIT 2000"})
query['queries'].append({'name': "Low CPU Utilization Hosts: Application Mapping",'value': "FROM Transaction SELECT latest(appName) FACET host LIMIT 2000"})

queries.append(query)
counter = counter + 1

query = {}
query['id'] = counter
query['name'] = 'Lambda Candidates: API Endpoints Executing in Under 3 Seconds'
query['type'] = 'drilldown'
query['view'] = 'side-by-side'
query['description'] = 'API endpoints are often ideal candidates for migration to AWS Lambda.  AWS Lambda, combined with Amazon API Gateway, provides a modern, cost effective alternative to the legacy model of deploying APIs atop oversized and underutilized servers. <BR /><BR />The chart below shows the number of transactions executed in under 3 seconds broken down into half second intervals. <BR /><BR />The first table shows all endpoints with a maximum transaction time of less than 3 seconds. <BR /><BR />The second table shows those same endpoints mapped to their respective parent applications.'
query['chart'] = {'type': 'HistogramChart', 'query': "SELECT histogram(duration, width:3, buckets:6) FROM Transaction SINCE 1 month ago"}
query['queries'] = []
query['queries'].append({'name': "API Endpoints: < 3 Second Transaction Time",'value': "FROM Transaction SELECT max(duration) AS 'Max Duration', count(*) AS 'Transaction Count' FACET request.uri WHERE errorMessage IS NULL AND request.uri IS NOT NULL AND request.uri NOT LIKE '%jpg%' AND request.uri NOT LIKE '%gif%' LIMIT 2000",'filter': [1,"<",3]})
query['queries'].append({'name': "API Endpoints: Application Mapping",'value': "FROM Transaction SELECT latest(appName) AS 'App Name' FACET request.uri WHERE errorMessage IS NULL AND request.uri IS NOT NULL AND request.uri NOT LIKE '%jpg%' AND request.uri NOT LIKE '%gif%' LIMIT 2000"})

queries.append(query)
counter = counter + 1

query = {}
query['id'] = counter
query['name'] = 'ElastiCache Candidates: MySQL Hosts with High Query Rates'
query['type'] = 'list'
query['view'] = 'side-by-side'
query['description'] = 'A consistently high count of slow queries on a DB can be an indicator of poorly written queries and/or a host in need of vertical scaling. However, often times improved caching using RDS in combination with ElastiCache can remedy the issue without the need for further refactoring or re-engineering effort.'
query['queries'] = []
query['queries'].append({'name': "Slow Query Per Second Rates: Hosts with >= 50 queries per second",'value': "FROM MysqlSample SELECT latest(label.Name) AS 'DB Name', count(query.slowQueriesPerSecond) AS 'Slow Queries', min(query.queriesPerSecond) AS 'Min. Queries Per Second' WHERE query.queriesPerSecond >= 50 FACET hostname since 7 days ago"})
query['queries'].append({'name': "Application List: Highest number of DB connections",'value': "FROM Transaction select max(databaseDuration) AS 'Max DB Duration', count(*) AS 'Count' facet appName where databaseDuration > 0"})

queries.append(query)
counter = counter + 1

query = {}
query['id'] = counter 
query['name'] = 'Aurora Candidates: DBs with a Low Number of Connections'
query['type'] = 'list'
query['view'] = 'top-to-bottom'
query['description'] = 'DB hosts with a low number of incoming DB connections are typically non-production DBs. Dev/Test DBs are ideal candidates for migration to Aurora Serverless due to its on-demand nature.<BR /><BR />The chart below shows the average CPU utilization of all DB hosts.<BR /><BR />The table shows databases averaging less than 100 connections.'
query['chart'] = {'type': 'LineChart', 'query': "FROM ProcessSample SELECT average(cpuPercent) WHERE processDisplayName LIKE '%sql%' OR processDisplayName LIKE '%oracle%' LIMIT 2000 FACET hostname, processDisplayName timeseries 30 minutes since 1 day ago"}
query['queries'] = []
query['queries'].append({'name': "Average Connections: DBs with < 100 Average Connections",'value': "FROM DatastoreSample SELECT latest(provider.databaseConnections.Average) WHERE provider.databaseConnections.Average < 100 FACET displayName AS 'DB Name' LIMIT 2000 since 1 month ago"})

queries.append(query)
counter = counter + 1

query = {}
query['id'] = counter 
query['name'] = 'EC2 Optimizations'
query['type'] = 'list'
query['view'] = 'top-to-bottom'
query['description'] = 'This dashboard provides a view of your applications and their recent response times.  Slow response times can indicate a problem within your application stack or servers that may need to be scaled up to handle the current load.'
query['queries'] = []
query['queries'].append({'name': "Application Response Times",'value': "SELECT average(duration) FROM Transaction WHERE duration > 3 FACET appName LIMIT 2000"})

queries.append(query)
counter = counter + 1

query = {}
query['id'] = counter 
query['name'] = 'EBS Optimizations'
query['type'] = 'list'
query['view'] = 'side-by-side'
query['description'] = 'This dashboard provides a view of your EBS volumes along with recommendations for rightsizing.'
query['chart'] = {'type': 'PieChart', 'query': "FROM BlockDeviceSample SELECT uniqueCount(displayName) AS 'Volumes' FACET awsRegion WHERE awsRegion IS NOT NULL"}
query['queries'] = []
query['queries'].append({'name': "EBS Volumes: Size Reduction Candidates (< 40% Usage)",'value': "FROM SystemSample SELECT latest(diskUsedPercent) AS 'Utilization %' WHERE provider = 'Ec2Instance' AND diskUsedPercent < 40 LIMIT 2000 FACET hostname"})
query['queries'].append({'name': "EBS Volumes: Size Increase Candidates (> 80% Usage)",'value': "FROM SystemSample SELECT latest(diskUsedPercent) AS 'Utilization %' WHERE provider = 'Ec2Instance' AND diskUsedPercent > 80 LIMIT 2000 FACET hostname"})

queries.append(query)
counter = counter + 1

query = {}
query['id'] = counter 
query['name'] = 'S3 Optimizations'
query['type'] = 'list'
query['view'] = 'side-by-side'
query['description'] = 'This dashboard provides a view of your S3 volumes along with Glacier archival recommendations.'
query['chart'] = {'type': 'PieChart', 'query': "from DatastoreSample SELECT uniqueCount(provider.bucketName) as 'Buckets' LIMIT 2000 WHERE provider.bucketName is NOT NULL FACET awsRegion"}
query['queries'] = []
query['queries'].append({'name': "S3 Buckets: Largest Buckets",'value': "FROM DatastoreSample SELECT latest(provider.bucketSizeBytes.Average) as 'Average Size in Bytes' WHERE provider.bucketSizeBytes.Average IS NOT NULL FACET provider.bucketName SINCE 3 days ago"})
query['queries'].append({'name': "S3 Buckets: Archival Candidates (< 10 Requests)",'value': "FROM DatastoreSample SELECT latest(provider.allRequests.Sum) AS 'Total Requests in the Last 3 Days' WHERE provider.bucketName is NOT NULL AND provider.allRequests.Sum < 10 FACET provider.bucketName LIMIT 2000 SINCE 3 days ago"})

queries.append(query)
counter = counter + 1

print "export var queries ="
print json.dumps(queries, indent=4, sort_keys=True)
