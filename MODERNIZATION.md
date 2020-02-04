# CAS: Modernization Patterns Nerdpack Configuration

The Modernization Nerdpack is powered by two JSON files

* `nerdlets/nr1-csg-cloud-journey-nerdlet/components/cloud-journey/components/modernization/modernization-patterns/accounts.js`: This file holds your account number/query key pair and is easily editable by hand
* `nerdlets/nr1-csg-cloud-journey-nerdlet/components/cloud-journey/components/modernization/modernization-patterns/queries.js`: This file is written by the `write_json.py` Python script.  Instructions for adding your own custom dashboards to the Nerdpack follow below.

Each dashboard contains:

* One or more NRQL queries containing one FACET, with 0 or 1 filters. A FACET is required and multiple facets are not supported at this time.
* Zero or One Charts

Here is an example of one of the dashboards represented in the `write_json.py` script:

```
query = {}
query['id'] = counter
query['name'] = 'Lambda Candidates: API Endpoints Executing in Under 3 Seconds'
query['type'] = 'drilldown'
query['view'] = 'side-by-side'
query['description'] = 'API endpoints are often ideal candidates for migration to AWS Lambda.  AWS Lambda, combined with Amazon API Gateway, provides a modern, cost effective alternative to the legacy model of deploying APIs atop oversized and underutilized servers. <BR /><BR />The chart below shows the number of transactions executed in under 3 seconds broken down into half second intervals. <BR /><BR />The first table shows all endpoints with a maximum transaction time of less than 3 seconds. <BR /><BR />The second table shows those same endpoints mapped to their respective parent applications.'
query['chart'] = {'type': 'HistogramChart', 'query': "SELECT histogram(duration, width:3, buckets:6) FROM Transaction SINCE 1 month ago"}
query['queries'] = []
query['queries'].append({'name': "API Endpoints: < 3 Second Transaction Time",'value': "FROM Transaction SELECT max(duration) AS 'Max Duration', count(*) AS 'Transaction Count' FACET request.uri",'filter': [1,"<",3]})
query['queries'].append({'name': "API Endpoints: Application Mapping",'value': "FROM Transaction SELECT latest(appName) AS 'App Name' FACET request.uri"})
```

The above example dashboard includes:

* A set of two queries, with one of the two queries containing a filter
* One Pie Chart

Let's walk through each line above that you will need to edit in order to create your own dashboards:

```
query['name'] = 'Lambda Candidates: API Endpoints Executing in Under 3 Seconds'
``` 

This is the name of your dashboard; it can be any string.

```
query['type'] = 'drilldown'
```

The options here are `drilldown` or `list`. This determines whether or not each NRQL query uses the output of the preceding NRQL queries as input.

For example, let's say you wish to know:

* How many instances you have running in AWS
* AND OF THOSE, how many are in US East
* AND OF THOSE, how many are running Linux

In the use case above, you would use `drilldown`. 

However, let's say you wish to know:

* How many instances you have running in AWS
* How many instances are running in US East
* How many instances are running Linux

In the example above, you would use `list`.  With `list`, each query is independent and does not depend on the output of previous queries.

```
query['view'] = 'side-by-side'
```

This determines whether or not the query tables generated are displayed side-by-side or one after the other.  Your options are `side-by-side` or `top-to-bottom`.  If using more than three queries, use `top-to-bottom`.

```
query['description'] = ''
```

This is the description of your dashboard that will be displayed at the top of the nerdlet.  You can use plain text or HTML.

```
query['chart'] = {'type': 'HistogramChart', 'query': "SELECT histogram(duration, width:3, buckets:6) FROM Transaction SINCE 1 month ago"}
```

(Optional) Display a chart at the top of the dashboard just below your description.

```
query['queries'].append({'name': "API Endpoints: < 3 Second Transaction Time",'value': "FROM Transaction SELECT max(duration) AS 'Max Duration', count(*) AS 'Transaction Count' FACET request.uri",'filter': [1,"<",3]})
```

(One or more) These are your queries whose results will be displayed in tabular form.  (Optional) The filter defines:

* Which value, from left to right in the NRQL query, do you want to filter against. (In the example above there is only one, `max(duration)`)
* What operator you wish to use.  Valid values are `>, >=, =, <, <= or LIKE`.

Once you've completed editing the file, execute it as follows to generate your new `queries.js` config file:

```
python write_json.py > nerdlets/nr1-csg-cloud-journey-nerdlet/components/cloud-journey/components/modernization/modernization-patterns/queries.js
```
