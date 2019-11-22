module.exports = function(props) {
  return (
	<div>
		<br /><h2 align="center">Welcome to the Modernization Patterns Nerdpack!</h2><br />
		<div className="main-text">
			Regardless of the industry they operate in, every one of our customers has a similar business mandate: deliver business value to customers, do this faster/better than the competition, and repeat (forever). To carry out these corporate objectives, our customers are regularly adopting new technologies and platforms, commonly referred to as “Cloud Native” tools. Whether they were born-in-the-cloud or are a large enterprise that’s leveraging the newest cloud platforms, our customers are finding it is difficult to modernize and optimize this rapidly evolving environment: new technologies and approaches are constantly emerging, modern and distributed environments are increasingly complex, and scaling is hard (not to mention costly).
  			<br /><br />
			This Nerdpack will assist you in identifying asssets in your AWS environment that can be modernized and/or optimized. It comes pre-loaded with dashboards based on the patterns detailed below.
		</div>
		<br /><hr width="85%" className="center-line"/><br />
		<div className="patterns">
			<img className="patterns-category" src="https://i.ibb.co/RPVTP3n/Amazon-EC2-AMI-light-bg-4x.png" height="25" width="25"/>
			<h3>&nbsp;Operating System Upgrades</h3><br />
			Modern server operating systems all come with a minimum of five years of support from their vendors but given the often difficult task of upgrading, businesses find themselves relying on outdated operating system versions that are driving the core of their business critical application stacks.
			<br /><br />
			Delaying OS upgrades can actually cause the process to be even more time consuming down the road as upgrading operating systems that are multiple major revisions behind can be quite difficult. More importantly, operating system versions no longer receiving updates pose a security risk.
			<br /><br />

			<img className="patterns-category" src="https://i.ibb.co/QX2SybM/AWS-Lambda-light-bg-4x.png" height="25" width="25"/>
			<h3>&nbsp;Going Serverless with Lambda</h3><br />
			AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume - there is no charge when your code is not running.
			<br /><br />
			With Lambda, you can run code for virtually any type of application or backend service - all with zero administration. Just upload your code and Lambda takes care of everything required to run and scale your code with high availability. You can set up your code to automatically trigger from other AWS services or call it directly from any web or mobile app.
			<br /><br />
			Key usage patterns for AWS Lambda include API Endpoints and underutilized instances running only a handful of processes.
			<br /><br />

			<img className="patterns-category" src="https://i.ibb.co/bR1Dj42/Amazon-Elasti-Cache-4x.png" height="25" width="25"/>
			<h3>&nbsp;Optimizing Performance with ElastiCache</h3><br />
			Amazon ElastiCache is a managed in-memory data store service utilizing either Redis or Memcached as the backend. One of the more popular use cases for ElastiCache is using it as a caching service for relational databases such as MySQL, Postgresql, and Oracle.
			<br /><br />
			While code changes are usually required to take advantage of ElastiCache, it is often less costly and more peformant than deploying additional database read replicas.
			<br /><br />

			<img className="patterns-category" src="https://i.ibb.co/mFJwWcW/Amazon-Aurora-light-bg-4x.png" height="25" width="25"/>
			<h3>&nbsp;Serverless SQL using Aurora</h3><br />
			Amazon Aurora Serverless is an on-demand, auto-scaling configuration for Amazon Aurora (MySQL-compatible and PostgreSQL-compatible editions), where the database will automatically start up, shut down, and scale capacity up or down based on your application's needs.
			<br /><br />
			It enables you to run your database in the cloud without managing any database instances. It's a simple, cost-effective option for infrequent, intermittent, or unpredictable workloads.
			<br /><br />

			<img className="patterns-category" src="https://i.ibb.co/DVbxDKD/Amazon-S3-Glacier-light-bg-4x.png" height="25" width="25"/>
			<h3>&nbsp;Storage Optimization</h3><br />
			Modernization and optimization go hand-in-hand in the cloud.  For compute, we have released a <a href="https://developer.newrelic.com/open-source/nerdpacks" target="_blank">Cloud Optimization Nerdpack</a>, but in many cases, storage can be as or more costly in AWS.
			<br /><br />
			Infrequently accessed data in S3 buckets that could be stored more cheaply in Glacier, large and unused S3 buckets that are no longer needed, and EBS volumes that are oversized are common issues that are easily remedied providing substantial cost savings.
			<br /><br />
			<br /><hr width="85%" className="center-line"/><br />
			To view dashboards corresponding to the modernization patterns detailed above, simply select your New Relic account name from the dropdown box at the top of the screen and then select the pattern in the the second dropdown box.
			<br /><br />
			While we have tried to add dashboards that are useful to most AWS consumers, we understand that every organization's modernization definition, needs, and patterns are different.  This Nerdpack is fully customizable allowing you to create dashboards catered to your own specific organizational needs by simply modifying a JSON configuration file.  For details, please <a href="https://github.com/iamfuzz/cas-modernization-nerdpack" target="_blank">visit the GitHub repository.</a>
		</div>
	</div>
  );
}
