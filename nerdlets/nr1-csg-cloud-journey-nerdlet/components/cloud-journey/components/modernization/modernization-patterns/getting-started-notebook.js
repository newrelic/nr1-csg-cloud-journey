const gettingStartedNotebook = accountId => {
  return {
    uuid: 'deadbeef',
    title: 'Modernization Patterns - Examples',
    cells: [
      {
        query: `{\n actor {\n  account(id: ${accountId}) {\n   nrql(query: "FROM SystemSample SELECT latest(linuxDistribution) AS 'Linux Distro' WHERE linuxDistribution LIKE '%Amazon%201%' FACET hostname") {\n    nrql \n   }\n  }\n } \n}`,
        notes:
          "Outdated AWS Linux AMIs"
      },
      {
        query: `{\n actor {\n  account(id: ${accountId}) {\n   nrql(query: "FROM ComputeSample SELECT latest(provider.cpuUtilization.Average) WHERE provider.cpuUtilization.Average < 20 FACET hostname LIMIT MAX") {\n    nrql \n   }\n  }\n } \n}`,
        notes:
          "Instances with low CPU utilization"
      },
      {
        query: `{\n actor {\n  account(id: ${accountId}) {\n   nrql(query: "FROM Transaction SELECT max(duration) AS 'Max Duration' FACET request.uri WHERE errorMessage IS NULL AND request.uri IS NOT NULL LIMIT MAX") {\n    nrql \n   }\n  }\n } \n}`,
        notes:
          "API endpoint response times"
      },
      {
        query: `{\n actor {\n  account(id: ${accountId}) {\n   nrql(query: "FROM MysqlSample SELECT max(query.slowQueriesPerSecond) FACET label.Name") {\n    nrql \n   }\n  }\n } \n}`,
        notes:
          "Database slow query counts"
      },
      {
        query: `{\n actor {\n  account(id: ${accountId}) {\n   nrql(query: "FROM DatastoreSample SELECT latest(provider.databaseConnections.Average)  FACET displayName AS 'DB Name'") {\n    nrql \n   }\n  }\n } \n}`,
        notes:
          "Database connection counts"
      },
    ]
  };
};

export { gettingStartedNotebook };
