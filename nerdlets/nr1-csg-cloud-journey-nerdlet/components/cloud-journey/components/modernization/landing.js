import React from 'react';
import PropTypes from 'prop-types';
import { Stack, StackItem } from 'nr1';

export default class EmptyState extends React.Component {
  static propTypes = {
    heading: PropTypes.string,
    description: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { heading, description } = this.props;
    return (
      <>
	<div>
		<div className="main-text">
			Regardless of the industry you operate in, every business has a similar mandate: deliver business value to customers, do this faster/better than the competition, and repeat. Carrying out these corporate objectives involves regularly adopting new technologies and platforms, commonly referred to as “Cloud Native” tools. Whether you were born-in-the-cloud or are a large enterprise that’s leveraging the newest cloud platforms, it is difficult to modernize and optimize this rapidly evolving environment: new technologies and approaches are constantly emerging, modern and distributed environments are increasingly complex, and scaling is difficult and costly.
			<br /><br />
			New Relic can alleviate some of the burden by helping to identify asssets in your AWS environment that can be modernized, optimized, or updated. Here are some key areas to focus on in the never-ending quest to balance performance and cost:  
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
			Modernization and optimization go hand-in-hand in the cloud.  For compute, we have released a <a href="https://developer.newrelic.com/open-source/nerdpacks" target="_blank">Cloud Optimization App</a>, but in many cases, storage can be as or more costly in AWS.
			<br /><br />
			Infrequently accessed data in S3 buckets that could be stored more cheaply in Glacier, large and unused S3 buckets that are no longer needed, and EBS volumes that are oversized are common issues that are easily remedied providing substantial cost savings.
			<br /><br />
			<br /><hr width="85%" className="center-line"/><br />
			By clicking on the "Modernization Patterns" link above, you can begin uncovering areas ripe for modernization in your own AWS estate using the New Relic GraphiQL Notebook. It allows you to explore and learn about the NerdGraph API dynamically. NerdGraph is New Relic's GraphQL API, an efficient and flexible query language that lets you request exactly the data you need, without over-fetching or under-fetching. While typical REST APIs require loading from multiple URLs, NerdGraph calls get all the data you need in a single request. 
			<br /><br />
                        We have provided some examples to get you started, but you can create, update, save, and delete your own fully customizable notebooks. Notebooks are also exportable and easily shared allowing teams to collaborate on modernization efforts.
		</div>
	</div>
      </>
    );
  }
}
