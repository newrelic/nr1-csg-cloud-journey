# New Relic Cloud Journey Application: Dashboard Configuration

Below you will find a list of all queries contained in the dashboards included with the Cloud Journey Application.  They are all static JSON files located in:

>nerdlets/nr1-csg-cloud-journey-nerdlet/components/insights-dashboard/dashboards

**Certain queries will require modification.  Instructions for those modifications are listed below.**

## cloud-native-services.json

### You should not need to make any changes to this file

>SELECT latest(`provider.estimatedCharges.Maximum`) from FinanceSample where provider='BillingServiceCost'  since 1 day ago facet `provider.serviceName` limit 100

>SELECT sum(`provider.requestCount.Sum`) from LoadBalancerSample WHERE  provider  = 'Elb' FACET awsRegion since 1 day ago

>select average(`provider.volumeWriteBytes.Average`) + average(`provider.volumeWriteBytes.Average`) from BlockDeviceSample WHERE provider = 'EbsVolume'  facet displayName TIMESERIES SINCE 1 day ago

>SELECT average(`provider.5xxError.Sum`) AS Error5xx FROM ApiGatewaySample WHERE provider = 'ApiGatewayApi'  TIMESERIES FACET displayName SINCE 1 day ago

>SELECT * FROM InfrastructureEvent WHERE source LIKE 'aws/lambda%' SINCE 1 day ago

>SELECT average(`provider.consumedWriteCapacityUnits.Sum` / (`provider.provisionedWriteCapacityUnits.Average` * 60 * 5)) * 100 FROM DatastoreSample where provider = 'DynamoDbTable'  since 1 day ago timeseries 30 minutes

>SELECT sum(`provider.requestCount.Sum`) FROM LoadBalancerSample WHERE  provider = 'Alb' TIMESERIES FACET displayName SINCE 1 day ago

>SELECT average(`provider.bucketSizeBytes.Average`)/1000000000 from DatastoreSample WHERE provider = 'S3Bucket'  TIMESERIES 1 day FACET entityName SINCE 1 week ago until 1 day ago limit 5

>SELECT average(`provider.writeIops.Average`) as 'Write Operations' From DatastoreSample WHERE provider = 'RdsDbInstance'  SINCE 1 day ago TIMESERIES UNTIL 10 minutes ago facet displayName

>SELECT average(`provider.volumeReadOps.Sum`) + average(`provider.volumeWriteOps.Sum`) FROM BlockDeviceSample WHERE provider = 'EbsVolume'  FACET displayName TIMESERIES since 1 day ago

>SELECT average(`provider.concurrentExecutions.Average`) FROM ServerlessSample WHERE provider LIKE 'LambdaRegion'  FACET awsRegion SINCE 1 hour ago UNTIL 6 minutes ago TIMESERIES 5 minutes

## delivery-overview.json

### You should not need to make any changes to this file

>from SystemSample   select    filter(uniquecount(hostname), WHERE provider IS NULL OR provider = 'Ec2Instance' ) AS 'Total Servers',    filter(uniquecount(hostname), WHERE provider IS NULL) AS 'On-Premises Servers',   filter(uniquecount(hostname), WHERE provider = 'Ec2Instance') AS 'AWS Servers'

>FROM SystemSample  SELECT uniqueCount(hostname) AS 'Hosts'  FACET cases(  WHERE provider IS NULL as 'On-Premises',      WHERE provider = 'Ec2Instance' as 'AWS')

>FROM Transaction   SELECT     filter(uniquecount(appName), WHERE appName LIKE '%_OP' OR appName LIKE '%_AWS' ) AS 'Total Apps',  filter(uniquecount(appName), WHERE appName LIKE '%_OP') AS 'On-Premise',  filter(uniquecount(appName), WHERE appName LIKE '%_AWS') AS 'AWS'

>FROM Transaction  SELECT uniqueCount(appName) AS 'Applications'  FACET cases(  WHERE appName LIKE '%_OP' as 'On-Premises',      WHERE appName LIKE '%_AWS' as 'AWS')

>from SyntheticCheck SELECT percentage(count(*),where result = 'SUCCESS') as 'Avail rate' since 1 day ago COMPARE WITH 1 day ago

>from SyntheticCheck SELECT percentage(count(*),where result = 'SUCCESS') as 'Availability %' FACET monitorName since 1 day ago

>FROM Transaction SELECT average(duration) WHERE username NOT LIKE '%acme.com'  FACET appName LIMIT 5 since 10 minutes ago

## optimization-ebs.json

### You should not need to make any changes to this file

>FROM BlockDeviceSample SELECT uniqueCount(displayName) AS 'Volumes' since 1 week ago

>FROM BlockDeviceSample select max(provider.volumeIdleTime.Average/60) AS 'Average Minutes Idle' WHERE provider = 'EbsVolume' AND provider.volumeIdleTime.Average > 200 since 1 week ago FACET displayName LIMIT 2000

>FROM BlockDeviceSample select min(provider.volumeReadOps.Maximum) AS 'Max ReadOPS' WHERE provider = 'EbsVolume' AND provider.volumeType = 'gp2' AND provider.volumeReadOps.Maximum < 200 and provider.volumeReadOps.Maximum > 0 since 1 week ago FACET displayName LIMIT 2000

>FROM SystemSample SELECT latest(diskUsedPercent) AS 'Utilization %' WHERE provider = 'Ec2Instance' AND diskUsedPercent < 40 FACET hostname LIMIT 2000

>FROM SystemSample SELECT min(diskUsedPercent) AS 'Utilization %' WHERE provider = 'Ec2Instance' AND diskUsedPercent > 80 FACET hostname since 1 week ago LIMIT 2000

>FROM BlockDeviceSample select uniques(displayName) WHERE provider = 'EbsVolume' AND provider.state = 'available' LIMIT 2000

## discovery-planning.json

### You will need to modify any *pageUrl* references to match those of the actual URLs the customer would like to monitor.

>FROM Transaction SELECT sum(PurchasedCartGrandTotal)/1000 as 'Revenue'   facet name since 1 day ago

>FROM TransactionError select count(*)  facet error.class,error.message since 1 day ago

>FROM SystemSample select average(cpuPercent) as 'CPU % used'  facet fullHostname since 1 day ago

>From Transaction select max(duration)  facet appName, name since last hour limit 5

>FROM PageView SELECT funnel(session, WHERE pageUrl like '%/' AS 'Homepage', where pageUrl like '%/browse/plans' AS 'Deals Listing', WHERE pageUrl LIKE '%login.jsp' AS 'Add to Cart',  WHERE pageUrl LIKE '%/checkout' AS 'Payment')  SINCE 1 day ago

>FROM Transaction SELECT sum(PurchasedCartGrandTotal) As 'Revenue'  SINCE 1 day ago COMPARE WITH 1 week ago TIMESERIES

>FROM Transaction SELECT ((filter(count(*),WHERE apdexPerfZone= 'S' OR `nr.apdexPerfZone` = 'S') + (filter(count(*), WHERE apdexPerfZone = 'T' OR `nr.apdexPerfZone` = 'T')/2))/count(*))*100 AS '% Score'  SINCE 1 week ago

>from Transaction SELECT average(duration)*1000 AS 'ms'  SINCE 24 hours ago TIMESERIES compare with 1 week ago

>FROM Transaction select count(*) facet request.uri 

>FROM  PageView select average(duration)  facet countryCode TIMESERIES 1 hour since 1 day ago

>from PageView select count(*) facet countryCode

>from PageView select count(*), average(duration) as 'Avg Duration', average(networkDuration) as 'Avg Network Duration' , average(webAppDuration) as 'AVG Web App Duration' facet appName, pageUrl since 1 day ago

>FROM SystemSample select average(cpuPercent), max(cpuPercent) , average(memoryUsedBytes/memoryTotalBytes) as 'Average Memory Used%' where apmApplicationNames like '%WebPortal%' facet hostname , processorCount, coreCount since 1 day ago

>from SystemSample select average(memoryUsedBytes/memoryTotalBytes) as '% of Memory used' timeseries 5 minutes since 1 hour ago facet hostname

>from SystemSample select average(cpuPercent) as 'CPU utlization' timeseries 5 minutes since 1 hour ago facet hostname

## waf-operational-excellence.json

### You should not need to make any changes to this file

>FROM PageView SELECT average(duration) WHERE appName LIKE '%_AWS' SINCE 30 minutes ago COMPARE WITH 1 day ago

>FROM Transaction SELECT average(duration) WHERE appName LIKE '%_AWS' since 1 day ago until 1 minute ago timeseries 30 minutes

>FROM Transaction SELECT average(duration) WHERE transactionType='Web' AND appName LIKE '%_AWS' FACET name limit 20 since 1 week ago

>FROM PageView SELECT average(duration) WHERE appName LIKE '%_OP' SINCE 30 minutes ago COMPARE WITH 1 day ago

>FROM Transaction SELECT average(duration) WHERE appName LIKE '%_OP' since 1 day ago until 1 minute ago timeseries 30 minutes

>FROM Transaction SELECT average(duration) WHERE transactionType='Web' AND appName LIKE '%_OP' FACET name limit 20 since 1 week ago

>FROM Transaction SELECT rate(count(*), 1 minute) as 'RPM' WHERE appName LIKE '%_AWS' since 1 hour ago COMPARE WITH 1 hour ago

>FROM Transaction SELECT count(*)/30 as 'RPM' WHERE appName LIKE '%_AWS' SINCE yesterday UNTIL 1 minute ago TIMESERIES 30 minutes

>FROM Transaction SELECT count(*) AS 'Count' WHERE appName LIKE '%_AWS' FACET name SINCE 30 minutes ago LIMIT 20

>FROM Transaction SELECT rate(count(*), 1 minute) as 'RPM' WHERE appName LIKE '%_OP' since 1 hour ago COMPARE WITH 1 hour ago

>FROM Transaction SELECT count(*)/30 as 'RPM' WHERE appName LIKE '%_OP' SINCE yesterday UNTIL 1 minute ago TIMESERIES 30 minutes

>FROM Transaction SELECT count(*) AS 'Count' WHERE appName LIKE '%_OP' FACET name SINCE 30 minutes ago LIMIT 20

>FROM Transaction SELECT average(duration) WHERE appName LIKE '%_AWS' since 1 week ago until 1 minute ago timeseries 30 minutes COMPARE WITH 1 week ago

>FROM Transaction SELECT count(*)/30 as 'RPM' WHERE appName LIKE '%_AWS' since 1 week ago until 1 minute ago TIMESERIES 30 minutes COMPARE WITH 1 week ago

>FROM Transaction SELECT count(`response.status`) WHERE appName LIKE '%_AWS' FACET `response.status`

>FROM Transaction SELECT average(duration) WHERE appName LIKE '%_OP' since 1 week ago until 1 minute ago timeseries 30 minutes COMPARE WITH 1 week ago

>FROM Transaction SELECT count(*)/30 as 'RPM' WHERE appName LIKE '%_OP' since 1 week ago until 1 minute ago TIMESERIES 30 minutes COMPARE WITH 1 week ago

>FROM Transaction SELECT count(`response.status`) WHERE appName LIKE '%_OP' FACET `response.status` since 1 day ago

>FROM Transaction SELECT count(*) WHERE appName LIKE '%_AWS' FACET weekdayOf(timestamp) since 7 days ago

>FROM Transaction SELECT percentile(duration, 50, 95, 99) WHERE appName LIKE '%_AWS' FACET name since 1 week ago

>FROM Transaction SELECT count(*) WHERE appName LIKE '%_OP' FACET weekdayOf(timestamp) since 7 days ago

>FROM Transaction SELECT percentile(duration, 50, 95, 99) WHERE appName LIKE '%_OP' FACET name since 1 week ago

>FROM Transaction SELECT count(*), average(duration), max(duration), min(duration) WHERE appName LIKE '%_AWS' FACET name SINCE 1 day ago limit 500

>FROM Transaction SELECT count(*), average(duration), max(duration), min(duration) WHERE appName LIKE '%_OP' FACET name SINCE 1 day ago limit 500

>FROM SyntheticCheck SELECT percentage(count(result), WHERE result = 'SUCCESS') AS '%' since 12 months ago facet monthOf(timestamp)

## sre.json

### In order for certain charts from this dashboard to report data properly, Browser must be sending the custom attribute *username* to New Relic.

>SELECT percentile(totalTime, 50, 90, 99) FROM Transaction WHERE  httpResponseCode = '200' SINCE 1 day ago TIMESERIES 1 hour EXTRAPOLATE

>SELECT percentile(totalTime, 50, 90, 99) FROM Transaction WHERE  httpResponseCode = '500' SINCE 1 day ago TIMESERIES 1 hour EXTRAPOLATE

>SELECT percentile(totalTime, 90) FROM Transaction  SINCE 1 day ago FACET username limit 20

>SELECT count(*) FROM Transaction WHERE  httpResponseCode = '500' SINCE 1 day ago TIMESERIES 1 hour COMPARE WITH 1 day ago EXTRAPOLATE

>SELECT rate(count(*), 1 minute) AS 'Requests per Minute' FROM Transaction  since 1 day ago TIMESERIES 10 minute EXTRAPOLATE

>SELECT rate(count(*), 1 hour) AS 'Requests per Hour' FROM Transaction  since 7 day ago TIMESERIES 1 hour  EXTRAPOLATE

>SELECT rate(count(*), 1 hour) AS 'Requests per Hour' FROM Transaction  since 1 day ago FACET username limit 20

>SELECT rate(count(*), 1 hour) AS 'Requests per Hour' FROM Transaction  since 7 day ago COMPARE WITH 1 week ago TIMESERIES 1 hour EXTRAPOLATE

>SELECT filter(count(*), WHERE httpResponseCode LIKE '1%') as '1xx Informational', filter(count(*), WHERE httpResponseCode LIKE '2%') as '2xx Success', filter(count(*), WHERE httpResponseCode LIKE '3%') as '3xx Redirection', filter(count(*), WHERE httpResponseCode LIKE '4%') as '4xx Client Error', filter(count(*), WHERE httpResponseCode LIKE '5%') as '5xx Server Error' FROM Transaction  SINCE 1 day ago

>SELECT percentage(count(*), WHERE error is true) AS 'Unhandled Error rate %' FROM Transaction  SINCE 1 day ago COMPARE WITH 1 day ago

>SELECT count(*) FROM Transaction WHERE  httpResponseCode LIKE '3%' or httpResponseCode LIKE '4%' OR httpResponseCode LIKE '5%' SINCE 1 day ago FACET httpResponseCode, name TIMESERIES 10 minutes

>SELECT filter(count(*), WHERE httpResponseCode LIKE '3%' as 'Redirection'), filter(count(*), WHERE httpResponseCode LIKE '4%' as 'Client Error'), filter(count(*), WHERE httpResponseCode LIKE '5%' as 'Server Error') FROM Transaction SINCE 1 day ago TIMESERIES 10 minutes EXTRAPOLATE

>SELECT count(*) FROM TransactionError WHERE  username IS NOT NULL FACET username, error.message, transactionName, host SINCE 1 day ago limit 10

>SELECT count(*) FROM TransactionError  FACET error.class SINCE 1 day ago TIMESERIES 10 minute limit 5 EXTRAPOLATE

>SELECT percentile(databaseDuration, 50, 90, 99) FROM Transaction  SINCE 1 day ago TIMESERIES 10 minute EXTRAPOLATE

>SELECT percentile(databaseDuration, 90) FROM Transaction  FACET host, name TIMESERIES 1 hour since  1 day ago

>SELECT percentile(databaseDuration, 90) FROM Transaction  FACET username SINCE 1 day ago LIMIT 10

>SELECT percentile(databaseDuration, 50, 95) FROM Transaction  SINCE 1 day ago COMPARE WITH 1 day ago TIMESERIES 10 minute EXTRAPOLATE

>SELECT rate(count(*), 1 minute) as 'RPM', max(totalTime) as 'Total', max(webDuration) as 'Web', max(databaseDuration) as 'DB', max(externalDuration) as 'External' FROM Transaction FACET host SINCE 1 day ago

## validate-technology.json

### You should not need to make any changes to this file

>FROM Transaction SELECT ((filter(count(*),WHERE apdexPerfZone= 'S' OR `nr.apdexPerfZone` = 'S') + (filter(count(*), WHERE apdexPerfZone = 'T' OR `nr.apdexPerfZone` = 'T')/2))/count(*))*100 AS '% Score' WHERE username NOT LIKE '%acme.com' AND appName LIKE '%_OP' SINCE 1 week ago

>FROM Transaction SELECT ((filter(count(*),WHERE apdexPerfZone= 'S' OR `nr.apdexPerfZone` = 'S') + (filter(count(*), WHERE apdexPerfZone = 'T' OR `nr.apdexPerfZone` = 'T')/2))/count(*))*100 AS '% Score' WHERE username NOT LIKE '%acme.com' AND appName LIKE '%_AWS' SINCE 1 week ago

>FROM Transaction SELECT ((filter(count(*),WHERE apdexPerfZone= 'S' OR `nr.apdexPerfZone` = 'S') + (filter(count(*), WHERE apdexPerfZone = 'T' OR `nr.apdexPerfZone` = 'T')/2))/count(*))*100 AS '% Score' WHERE username NOT LIKE '%acme.com' AND (appName LIKE '%_OP' OR appName LIKE '%_AWS') SINCE 1 week ago

>FROM Transaction SELECT 100 * apdex(duration , t: 0.03) AS '%' WHERE username NOT LIKE '%acme.com' and appName LIKE '%_OP' FACET appName

>FROM Transaction SELECT 100 * apdex(duration , t: 0.03) AS '%' WHERE username NOT LIKE '%acme.com' and appName LIKE '%_AWS' FACET appName

>FROM Transaction SELECT 100 * apdex(duration , t: 0.03) AS '%' WHERE username NOT LIKE '%acme.com' AND (appName LIKE '%_OP' OR appName LIKE '%_AWS') FACET appName

>FROM TransactionError SELECT count(*) AS 'Count' WHERE appName LIKE '%_OP' FACET appName SINCE 1 hour ago

>FROM TransactionError SELECT count(*) AS 'Count' WHERE appName LIKE '%_AWS' FACET appName SINCE 1 hour ago

>FROM TransactionError SELECT count(*) AS 'Count' WHERE (appName LIKE '%_OP' OR appName LIKE '%_AWS') FACET appName SINCE 1 hour ago

>FROM TransactionError SELECT count(*) AS 'Count' WHERE appName LIKE '%_OP' FACET transactionName SINCE 1 hour ago

>FROM TransactionError SELECT count(*) AS 'Count' WHERE appName LIKE '%_AWS' FACET transactionName SINCE 1 hour ago

>FROM TransactionError SELECT count(*) AS 'Count' WHERE (appName LIKE '%_OP' OR appName LIKE '%_AWS') FACET transactionName SINCE 1 hour ago

>from Transaction SELECT average(duration)*1000 AS 'ms' WHERE appName LIKE '%_OP' SINCE 1 hours ago TIMESERIES

>from Transaction SELECT average(duration)*1000 AS 'ms' WHERE appName LIKE '%_AWS' SINCE 1 hours ago TIMESERIES

>from Transaction SELECT average(duration)*1000 AS 'ms' WHERE (appName LIKE '%_OP' OR appName LIKE '%_AWS') SINCE 1 hours ago TIMESERIES

>FROM Transaction SELECT average(duration) AS 'sec' WHERE appName LIKE '%_OP' FACET name SINCE 1 hours ago

>FROM Transaction SELECT average(duration) AS 'sec' WHERE appName LIKE '%_AWS' FACET name SINCE 1 hours ago

>FROM Transaction SELECT average(duration) AS 'sec' WHERE (appName LIKE '%_OP' OR appName LIKE '%_AWS') FACET name SINCE 1 hours ago

>FROM Transaction SELECT average(databaseDuration)*1000 AS 'ms' WHERE appName LIKE '%_OP' SINCE 1 hours ago TIMESERIES

>FROM Transaction SELECT average(databaseDuration)*1000 AS 'ms' WHERE appName LIKE '%_AWS' SINCE 1 hours ago TIMESERIES

>FROM Transaction SELECT average(databaseDuration)*1000 AS 'ms' WHERE (appName LIKE '%_OP' OR appName LIKE '%_AWS') SINCE 1 hours ago TIMESERIES

## business-value.json

### You will need to modify any *pageUrl* references to match those of the actual URLs the customer would like to monitor.

>SELECT count(*),count(errorCode) from Transaction since 1 day ago FACET appName

>SELECT sum(PurchasedCartGrandTotal)/365 As 'Revenue' FROM Transaction WHERE name = 'WebTransaction/JSP/purchase/confirmation.jsp' since 1 day ago COMPARE WITH 1 day ago

>SELECT uniqueCount(session) AS 'Site Visitors' FROM PageView SINCE 2 minutes ago

>SELECT uniqueCount(session)/9 AS 'Site Visitors' FROM PageView SINCE 1 day ago COMPARE WITH 1 day ago

>SELECT sum(PurchasedCartGrandTotal)/450 AS 'Average Price' from Transaction where error  IS NOT NULL since 1 day ago

>SELECT count(*) AS 'Duration' FROM PageView facet buckets(duration,10,10) SINCE 1 day ago WHERE pageUrl like '%shoppingcart'

>SELECT count(*)*2 as 'Page Views' FROM PageView where pageUrl LIKE '%webportal%.amazonaws.com/' and duration >= 4 since 1 day ago

>SELECT funnel(session, WHERE pageUrl like '%webportal%.amazonaws.com/' AS 'Home', where pageUrl like '%.amazonaws.com/login' AS 'Login', WHERE pageUrl LIKE '%webportal%.amazonaws.com/browse/%' AS 'Browse Items',  WHERE pageUrl LIKE '%webportal%.amazonaws.com/shoppingcart' AS 'Purchased') FROM PageView SINCE 1 day ago

>SELECT count(*) AS 'Purchase Errors' from Transaction where name = 'WebTransaction/JSP/purchase/confirmation.jsp' AND  error  IS NOT NULL since 1 day ago

>SELECT count(*) FROM PageView facet regionCode SINCE 1 HOUR AGO limit 10

>SELECT count(httpResponseCode) FROM Transaction  WHERE  httpResponseCode != '200' facet httpResponseCode since 1 day ago

>SELECT uniqueCount(session) AS 'Site Visitors' FROM PageView SINCE 1 day ago COMPARE WITH 1 day ago TIMESERIES

## discovery-applications.json

### You should not need to make any changes to this file

>FROM Transaction   SELECT     uniquecount(appName) AS '' WHERE appName LIKE '%_OP'

>FROM Transaction   SELECT     filter(uniquecount(appName), WHERE appName LIKE '%_OP' OR appName LIKE '%_AWS' ) AS 'Total Apps',  filter(uniquecount(appName), WHERE appName LIKE '%_OP') AS 'On-Premises',  filter(uniquecount(appName), WHERE appName LIKE '%_AWS') AS 'AWS'

>FROM Transaction   SELECT     uniquecount(appName) AS '' WHERE appName LIKE '%_AWS'

>FROM Transaction  SELECT uniqueCount(appName) AS 'Applications'  FACET cases(  WHERE appName LIKE '%_OP' as 'On-Premises',      WHERE appName LIKE '%_AWS' as 'AWS')

>FROM Transaction  SELECT count(*) AS 'Transactions' WHERE appName LIKE '%_OP' AND username NOT LIKE '%acme.com' FACET appName

>FROM Transaction  SELECT count(*) AS 'Transactions' WHERE appName LIKE '%_AWS'  AND username NOT LIKE '%acme.com'  FACET appName

>FROM Transaction  SELECT count(*) AS 'Transactions' WHERE (appName LIKE '%_OP' OR appName LIKE '%_AWS')  AND username NOT LIKE '%acme.com' FACET appName

>FROM Transaction SELECT count(*) AS 'Transactions'  WHERE (appName LIKE '%_OP' AND username NOT LIKE '%acme.com') AND username NOT LIKE '%acme.com'  FACET host

>FROM Transaction SELECT count(*) AS 'Transactions'  WHERE appName LIKE '%_AWS'  AND username NOT LIKE '%acme.com' FACET host

>FROM Transaction SELECT count(*) AS 'Transactions'  WHERE (appName LIKE '%_OP' OR appName LIKE '%_AWS')  AND username NOT LIKE '%acme.com' FACET host

>FROM Transaction SELECT count(*) AS 'Transactions'  WHERE appName LIKE '%_OP'  AND username NOT LIKE '%acme.com' FACET appName

>FROM Transaction SELECT count(*) AS 'Transactions'  WHERE appName LIKE '%_AWS'  AND username NOT LIKE '%acme.com' FACET appName

>FROM Transaction SELECT count(*) AS 'Transactions'  WHERE (appName LIKE '%_OP' OR appName LIKE '%_AWS')  AND username NOT LIKE '%acme.com' FACET appName

>FROM Transaction SELECT count(*) AS 'Transactions'  WHERE appName LIKE '%_OP'  AND username NOT LIKE '%acme.com' FACET name

>FROM Transaction SELECT count(*) AS 'Transactions'  WHERE appName LIKE '%_AWS'  AND username NOT LIKE '%acme.com'  FACET name

>FROM Transaction SELECT count(*) AS 'Transactions'  WHERE (appName LIKE '%_OP' OR appName LIKE '%_AWS')  AND username NOT LIKE '%acme.com' FACET name

>FROM Transaction SELECT count(*) AS 'Transactions'  WHERE appName LIKE '%_OP'  AND username NOT LIKE '%acme.com'  FACET transactionType

>FROM Transaction SELECT count(*) AS 'Transactions'  WHERE appName LIKE '%_AWS'  AND username NOT LIKE '%acme.com' FACET transactionType

>FROM Transaction SELECT count(*) AS 'Transactions'  WHERE (appName LIKE '%_OP' OR appName LIKE '%_AWS')  AND username NOT LIKE '%acme.com' FACET transactionType

>FROM Transaction SELECT count(*) AS 'Transactions'  WHERE appName LIKE '%_OP'  AND username NOT LIKE '%acme.com' FACET transactionSubType

>FROM Transaction SELECT count(*) AS 'Transactions'  WHERE appName LIKE '%_AWS'  AND username NOT LIKE '%acme.com' FACET transactionSubType

>FROM Transaction SELECT count(*) AS 'Transactions'  WHERE (appName LIKE '%_OP' OR appName LIKE '%_AWS')  AND username NOT LIKE '%acme.com' FACET transactionSubType

>FROM TransactionError SELECT count(*) AS 'Count' WHERE appName LIKE '%_OP' FACET appName

>FROM TransactionError SELECT count(*) AS 'Count' WHERE appName LIKE '%_AWS' FACET appName

>FROM TransactionError SELECT count(*) AS 'Count' WHERE appName LIKE '%_OP' OR appName LIKE '%_AWS' FACET appName

>FROM TransactionError SELECT count(*) AS 'Count' WHERE appName LIKE '%_OP' FACET transactionName

>FROM TransactionError SELECT count(*) AS 'Count' WHERE appName LIKE '%_AWS' FACET transactionName

>FROM TransactionError SELECT count(*) AS 'Count' WHERE appName LIKE '%_OP' OR appName LIKE '%_AWS' FACET transactionName

>FROM TransactionError SELECT count(*) AS 'Count' WHERE appName LIKE '%_OP' FACET host

>FROM TransactionError SELECT count(*) AS 'Count' WHERE appName LIKE '%_AWS' FACET host

>FROM TransactionError SELECT count(*) AS 'Count' WHERE appName LIKE '%_OP' OR appName LIKE '%_AWS' FACET host

## waf-reliability.json

### In order for certain charts from this dashboard to report data properly, Browser must be sending the custom attribute *username* to New Relic.

### You will also need to modify any *pageUrl* references to match those of the actual URLs the customer would like to monitor.

>from PageView select average(duration) facet userAgentName TIMESERIES since 1 week ago

>from PageView select average(duration) as 'Avg Page Load Time', max(duration) as 'Max Page Load Time', count(*)/10 as 'Page Views' timeseries since 1 week ago

>SELECT apdex(duration, t: 1.0) FROM Transaction SINCE 1 week ago

>SELECT count(apdexPerfZone) FROM Transaction FACET apdexPerfZone SINCE 1 week ago TIMESERIES

>SELECT average(duration) FROM PageView FACET name since 1 day ago

>SELECT count(entityName) FROM AutoScalingGroupSample FACET entityName SINCE 1 day AGO

>SELECT average(duration) as 'Load Time', count(username) as 'Users' FROM PageView FACET countryCode SINCE 1 day AGO limit 10

## discovery-hardware.json

### You should not need to make any changes to this file

>from SystemSample   select    filter(uniquecount(hostname), WHERE provider IS NULL OR provider = 'Ec2Instance' ) AS 'Total Servers',    filter(uniquecount(hostname), WHERE provider IS NULL) AS 'On-Premises Servers',   filter(uniquecount(hostname), WHERE provider = 'Ec2Instance') AS 'AWS Servers'

>FROM SystemSample  SELECT uniqueCount(hostname) AS 'Hosts'  FACET cases(  WHERE provider IS NULL as 'On-Premises',      WHERE provider = 'Ec2Instance' as 'AWS')

>from Transaction select uniqueCount(appName) as 'Apps' WHERE appName LIKE '%_OP' facet host

>from Transaction select uniqueCount(appName) as 'Apps'  WHERE appName LIKE '%_AWS' facet host

>FROM SystemSample  SELECT uniqueCount(hostname) AS 'Hosts'  WHERE provider IS NULL FACET operatingSystem

>FROM SystemSample  SELECT uniqueCount(hostname) AS 'Hosts' WHERE provider = 'Ec2Instance' FACET operatingSystem

>FROM SystemSample  SELECT uniqueCount(hostname) AS 'Hosts' WHERE provider IS NULL OR  provider = 'Ec2Instance' FACET operatingSystem

>FROM SystemSample   SELECT uniqueCount(hostname) AS 'Hosts'  FACET processorCount   WHERE provider IS NULL

>FROM SystemSample  SELECT uniqueCount(hostname)  AS 'Hosts' FACET processorCount   WHERE provider = 'Ec2Instance'

>FROM SystemSample  SELECT uniqueCount(hostname) AS 'Hosts'   FACET processorCount  WHERE provider IS NULL    OR provider = 'Ec2Instance'

>FROM StorageSample SELECT average(diskUsedPercent) as 'Percent Full'   WHERE provider IS NULL SINCE 1 MINUTE AGO

>FROM StorageSample SELECT average(diskUsedPercent) as 'Percent Full'   WHERE provider = 'Ec2Instance' SINCE 1 MINUTE AGO

>FROM StorageSample SELECT average(diskUsedPercent) as 'Percent Full'  WHERE provider IS NULL  OR provider = 'Ec2Instance' SINCE 1 MINUTE AGO

>FROM SystemSample, NetworkSample  SELECT  latest(coreCount) as 'Core Count',  max(cpuPercent) as 'Peak CPU %',  average(cpuPercent) as 'Avg CPU %',  latest(operatingSystem) as 'OS',  latest(processorCount) as 'Processor Count',  average(diskTotalBytes)/1073741824 as 'Total Storage',  max(diskUtilizationPercent) as 'Peak Storage %',  average(diskUtilizationPercent) as 'Avg Storage %',  average(memoryTotalBytes)/1073741824 as 'Memory Installed',  average(memoryUsedBytes/memoryTotalBytes) as 'Avg Memory %',  max(memoryUsedBytes/memoryTotalBytes) as 'Peak Memory %',  average(transmitBytesPerSecond) as 'Avg Network Usage',  max(transmitBytesPerSecond) as 'Peak Network Usage'  WHERE provider IS NULL FACET hostname

>FROM SystemSample, NetworkSample  SELECT  latest(coreCount) as 'Core Count',  max(cpuPercent) as 'Peak CPU %',  average(cpuPercent) as 'Avg CPU %',  latest(operatingSystem) as 'OS',  latest(processorCount) as 'Processor Count',  average(diskTotalBytes)/1073741824 as 'Total Storage',  max(diskUtilizationPercent) as 'Peak Storage %',  average(diskUtilizationPercent) as 'Avg Storage %',  average(memoryTotalBytes)/1073741824 as 'Memory Installed',  average(memoryUsedBytes/memoryTotalBytes) as 'Avg Memory %',  max(memoryUsedBytes/memoryTotalBytes) as 'Peak Memory %',  average(transmitBytesPerSecond) as 'Avg Network Usage',  max(transmitBytesPerSecond) as 'Peak Network Usage'  WHERE provider = 'Ec2Instance' FACET hostname

>FROM SystemSample, NetworkSample  SELECT  latest(coreCount) as 'Core Count',  max(cpuPercent) as 'Peak CPU %',  average(cpuPercent) as 'Avg CPU %',  latest(operatingSystem) as 'OS',  latest(processorCount) as 'Processor Count',  average(diskTotalBytes)/1073741824 as 'Total Storage',  max(diskUtilizationPercent) as 'Peak Storage %',  average(diskUtilizationPercent) as 'Avg Storage %',  average(memoryTotalBytes)/1073741824 as 'Memory Installed',  average(memoryUsedBytes/memoryTotalBytes) as 'Avg Memory %',  max(memoryUsedBytes/memoryTotalBytes) as 'Peak Memory %',  average(transmitBytesPerSecond) as 'Avg Network Usage',  max(transmitBytesPerSecond) as 'Peak Network Usage'  WHERE provider IS NULL    OR provider = 'Ec2Instance' FACET hostname

>FROM SystemSample   SELECT  max(cpuPercent) as '%'   WHERE provider IS NULL   FACET hostname

>FROM SystemSample   SELECT  max(cpuPercent) as '%'   WHERE provider = 'Ec2Instance'   FACET hostname

>FROM SystemSample   SELECT  max(cpuPercent) as '%'   WHERE provider IS NULL    OR provider = 'Ec2Instance'   FACET hostname

>FROM SystemSample   SELECT average(cpuPercent) as '%'   WHERE provider IS NULL   FACET hostname

>FROM SystemSample   SELECT average(cpuPercent) as '%' WHERE provider = 'Ec2Instance'   FACET hostname

>FROM SystemSample   SELECT average(cpuPercent) as '%'   WHERE provider IS NULL    OR provider = 'Ec2Instance'   FACET hostname

>FROM SystemSample  SELECT  average(diskTotalBytes)/1073741824 as 'GB'   WHERE provider IS NULL   FACET hostname

>FROM SystemSample  SELECT  average(diskTotalBytes)/1073741824 as 'GB'   WHERE provider = 'Ec2Instance'   FACET hostname

>FROM SystemSample  SELECT  average(diskTotalBytes)/1073741824as 'GB'   WHERE provider IS NULL OR provider = 'Ec2Instance'  FACET hostname

>FROM SystemSample  SELECT  max(diskUtilizationPercent)*100  as '%'   WHERE provider IS NULL   FACET hostname

>FROM SystemSample  SELECT  max(diskUtilizationPercent)  as '%'   WHERE provider = 'Ec2Instance'    FACET hostname

>FROM SystemSample  SELECT  max(diskUtilizationPercent)  as '%'   WHERE provider IS NULL    OR provider = 'Ec2Instance'  FACET hostname

>FROM SystemSample  SELECT  average(diskUtilizationPercent)  as '%'   WHERE provider IS NULL   FACET hostname

>FROM SystemSample  SELECT  average(diskUtilizationPercent)  as '%'   WHERE provider = 'Ec2Instance'  FACET hostname

>FROM SystemSample  SELECT  average(diskUtilizationPercent)  as '%'   WHERE provider IS NULL OR provider = 'Ec2Instance'   FACET hostname

>FROM SystemSample  SELECT  average(memoryTotalBytes)/1073741824 as 'GB'   WHERE provider IS NULL   FACET hostname

>FROM SystemSample  SELECT  average(memoryTotalBytes)/1073741824 as 'GB'   WHERE provider = 'Ec2Instance'   FACET hostname

>FROM SystemSample  SELECT  average(memoryTotalBytes)/1073741824 as 'GB'   WHERE provider IS NULL OR provider = 'Ec2Instance'   FACET hostname

>FROM SystemSample  SELECT  average(memoryUsedBytes/memoryTotalBytes)*100   as '%'   WHERE provider IS NULL   FACET hostname

>FROM SystemSample  SELECT  average(memoryUsedBytes/memoryTotalBytes)*100   as '%'   WHERE provider = 'Ec2Instance'   FACET hostname

>FROM SystemSample  SELECT  average(memoryUsedBytes/memoryTotalBytes)*100   as '%'   WHERE provider IS NULL OR provider = 'Ec2Instance'  FACET hostname

>FROM SystemSample  SELECT  max(memoryUsedBytes/memoryTotalBytes)*100   as '%'   WHERE provider IS NULL   FACET hostname

>FROM SystemSample  SELECT  max(memoryUsedBytes/memoryTotalBytes)*100   as '%'   WHERE provider = 'Ec2Instance'   FACET hostname

>FROM SystemSample  SELECT  max(memoryUsedBytes/memoryTotalBytes)*100   as '%'   WHERE provider IS NULL OR provider = 'Ec2Instance'  FACET hostname

>FROM NetworkSample  SELECT  average(transmitBytesPerSecond)/1024   as 'MB/s'   WHERE provider IS NULL   FACET hostname

>FROM NetworkSample  SELECT  average(transmitBytesPerSecond)/1024   as 'MB/s'   WHERE provider = 'Ec2Instance'   FACET hostname

>FROM NetworkSample  SELECT  average(transmitBytesPerSecond)/1024   as 'MB/s'   WHERE provider IS NULL OR provider = 'Ec2Instance'   FACET hostname

>FROM NetworkSample  SELECT  max(transmitBytesPerSecond)/1024   as 'MB/s'   WHERE provider IS NULL   FACET hostname

>FROM NetworkSample  SELECT  max(transmitBytesPerSecond)/1024   as 'MB/s'   WHERE provider = 'Ec2Instance'   FACET hostname

>FROM NetworkSample  SELECT  max(transmitBytesPerSecond)/1024   as 'MB/s'   WHERE provider IS NULL OR provider = 'Ec2Instance'  FACET hostname

## validate-business-case.json

### In order for certain charts from this dashboard to report data properly, Browser must be sending the custom attribute *username* to New Relic.

### You will also need to modify any *pageUrl* references to match those of the actual URLs the customer would like to monitor.

>FROM PageView SELECT uniqueCount(session) AS 'Site Visitors' WHERE username NOT LIKE '%acme.com' AND appName LIKE '%_OP' SINCE 1 day ago COMPARE WITH 1 day ago

>FROM PageView SELECT uniqueCount(session) AS 'Site Visitors' WHERE username NOT LIKE '%acme.com' AND appName LIKE '%_AWS' SINCE 1 day ago COMPARE WITH 1 day ago

>FROM PageView SELECT uniqueCount(session) AS 'Site Visitors' WHERE username NOT LIKE '%acme.com' AND (appName LIKE '%_OP' OR appName LIKE '%_AWS') SINCE 1 day ago COMPARE WITH 1 day ago

>FROM PageView SELECT funnel(session, WHERE pageUrl like '%/' AS 'Homepage', where pageUrl like '%/browse/plans' AS 'Deals Listing', WHERE pageUrl LIKE '%login.jsp' AS 'Add to Cart',  WHERE pageUrl LIKE '%/checkout' AS 'Payment') WHERE username NOT LIKE '%acme.com' and appName LIKE '%_OP' SINCE 1 day ago

>FROM PageView SELECT funnel(session, WHERE pageUrl like '%/' AS 'Homepage', where pageUrl like '%/browse/plans' AS 'Deals Listing', WHERE pageUrl LIKE '%login.jsp' AS 'Add to Cart',  WHERE pageUrl LIKE '%/checkout' AS 'Payment') WHERE username NOT LIKE '%acme.com' and appName LIKE '%_AWS' SINCE 1 day ago

>FROM PageView SELECT funnel(session, WHERE pageUrl like '%/' AS 'Homepage', where pageUrl like '%/browse/plans' AS 'Deals Listing', WHERE pageUrl LIKE '%login.jsp' AS 'Add to Cart',  WHERE pageUrl LIKE '%/checkout' AS 'Payment') WHERE username NOT LIKE '%acme.com' and (appName LIKE '%_OP' OR appName LIKE '%_AWS') SINCE 1 day ago

>from Transaction SELECT count(errorMessage) WHERE appName LIKE '%_OP' since 1 day ago FACET errorMessage

>from Transaction SELECT count(errorMessage) WHERE appName LIKE '%_AWS' since 1 day ago FACET errorMessage

>from Transaction SELECT count(errorMessage) WHERE appName LIKE '%_OP' OR appName LIKE '%_AWS' since 1 day ago FACET errorMessage

>FROM SyntheticCheck SELECT percentage(count(*), WHERE result = 'SUCCESS') SINCE 1 week ago

>FROM SyntheticCheck SELECT 100 - percentage(count(*), WHERE result = 'SUCCESS') as '%' SINCE 1 month ago facet location limit 5

>from Transaction SELECT uniqueCount(username) as 'Count' WHERE error IS NOT NULL and username NOT LIKE '%acme.com' AND appName LIKE '%_OP' since 1 day ago

>from Transaction SELECT uniqueCount(username) as 'Count' WHERE error IS NOT NULL and username NOT LIKE '%acme.com' AND appName LIKE '%_AWS' since 1 day ago

>from Transaction SELECT uniqueCount(username) as 'Count' WHERE error IS NOT NULL and username NOT LIKE '%acme.com' AND (appName LIKE '%_OP' OR appName LIKE '%_AWS') SINCE 1 day ago

>FROM Transaction SELECT sum(PurchasedCartGrandTotal) As 'Revenue' WHERE username NOT LIKE '%acme.com' AND appName LIKE '%_OP' SINCE 1 day ago COMPARE WITH 1 day ago TIMESERIES

>FROM Transaction SELECT sum(PurchasedCartGrandTotal) As 'Revenue' WHERE username NOT LIKE '%acme.com' AND appName LIKE '%_AWS' SINCE 1 day ago COMPARE WITH 1 day ago TIMESERIES

>FROM Transaction SELECT sum(PurchasedCartGrandTotal) As 'Revenue' WHERE username NOT LIKE '%acme.com' AND (appName LIKE '%_OP' OR appName LIKE '%_AWS') SINCE 1 day ago COMPARE WITH 1 day ago TIMESERIES

>FROM PageView SELECT uniqueCount(session) AS 'Count' WHERE username NOT LIKE '%acme.com' AND appName LIKE '%_OP' SINCE 5 minute ago UNTIL 1 minute ago COMPARE WITH 1 day ago

>FROM PageView SELECT uniqueCount(session) AS 'Count' WHERE username NOT LIKE '%acme.com' AND appName LIKE '%_AWS' SINCE 5 minute ago UNTIL 1 minute ago COMPARE WITH 1 day ago

>FROM PageView SELECT uniqueCount(session) AS 'Count' WHERE username NOT LIKE '%acme.com' AND (appName LIKE '%_OP' OR appName LIKE '%_AWS') SINCE 5 minute ago UNTIL 1 minute ago COMPARE WITH 1 day ago

>FROM PageView SELECT histogram(duration,10) WHERE username NOT LIKE '%acme.com' AND appName LIKE '%_OP' SINCE 1 day ago

>FROM PageView SELECT histogram(duration,10) WHERE username NOT LIKE '%acme.com' AND appName LIKE '%_AWS' SINCE 1 day ago

>FROM PageView SELECT histogram(duration,10) WHERE username NOT LIKE '%acme.com' AND (appName LIKE '%_OP' OR appName LIKE '%_AWS') SINCE 1 day ago

## optimization-s3.json

### You should not need to make any changes to this file

>from DatastoreSample SELECT uniqueCount(provider.bucketName) as 'Buckets' WHERE provider.bucketName is NOT NULL LIMIT 2000

>from DatastoreSample SELECT latest(provider.allRequests.Sum) AS 'Total Requests', latest(timestamp) as 'Last Polled' WHERE provider.bucketName is NOT NULL AND provider.allRequests.Sum < 10 FACET provider.bucketName since 1 week ago LIMIT 2000

>from DatastoreSample SELECT latest(provider.bucketSizeBytes.Average) as 'Average Size in Bytes', latest(timestamp) as 'Last polled' WHERE provider.bucketSizeBytes.Average IS NOT NULL FACET provider.bucketName SINCE 3 days ago LIMIT 2000

## optimization-ec2.json

### You should not need to make any changes to this file

>FROM SystemSample SELECT min(cpuPercent) AS '%' WHERE provider = 'Ec2Instance' AND cpuIdlePercent > 80 FACET hostname since 1 week ago

>FROM SystemSample SELECT min(cpuPercent) AS '%' WHERE provider = 'Ec2Instance' AND cpuIdlePercent < 20 FACET hostname since 1 week ago

>FROM SystemSample SELECT max(cpuPercent) AS '%' WHERE provider = 'Ec2Instance' FACET hostname since 1 week ago TIMESERIES

>FROM SystemSample SELECT average(cpuPercent) as '%' WHERE provider ='Ec2Instance' FACET hostname since 1 week ago TIMESERIES

