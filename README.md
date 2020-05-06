# Installing the New Relic Cloud Journey App

## Getting Started

Please note that this application is only intended to work for customers who plan to migrate, have begun migrating, or have already migrated to AWS.  We are looking to expand this application to support GCP and Azure, but it is currently designed for **AWS only**.

Before proceeding, ensure that the customer's AWS account is properly connected to New Relic by [following the instructions here](https://docs.newrelic.com/docs/integrations/amazon-integrations/get-started/connect-aws-infrastructure).

The customer must also have **Infrastructure installed on all of their on-prem servers and AWS instances, their apps instrumented with APM, and preferably Browser installed for all of their wesbites.**

The Cloud Journey App provides a Before, During, and After view of the customer's cloud journey categorized into five key pillars:

* Foundation
* Migration
* Modernization
* Optimization
* Thriving Business

## Pre-requesites

* Nerdpack Manager privileges within the account you wish to deploy to

## Installation

First, ensure that you have [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [NPM](https://www.npmjs.com/get-npm) installed. If you're unsure whether you have one or both of them installed, run the following command(s) (If you have them installed these commands will return a version number, if not, the commands won't be recognized):

```bash
git --version
npm -v
```

Next, install the [NR1 CLI](https://one.newrelic.com/launcher/developer-center.launcher) by going to [this link](https://one.newrelic.com/launcher/developer-center.launcher) and following the instructions (5 minutes or less) to install and setup your New Relic development environment.

Next, to clone this repository and run the code locally against your New Relic data, execute the following commands(**You will need to enter 'y' when prompted to create a new UUID for the application**):

```bash
nr1 nerdpack:clone -r https://github.com/newrelic/nr1-csg-cloud-journey.git
cd nr1-csg-cloud-journey
npm update
nr1 nerdpack:uuid --generate
nr1 nerdpack:serve
```

Visit [https://one.newrelic.com/?nerdpacks=local](https://one.newrelic.com/?nerdpacks=local), navigate to the Nerdpack, and :sparkles:

## Deploying this Nerdpack

Open a command prompt in the nerdpack's directory and run the following commands.

```bash
# If you need to create a new uuid for the account to which you're deploying this Nerdpack, use the following
# nr1 nerdpack:uuid -g [--profile=your_profile_name]
# to see a list of APIkeys / profiles available in your development environment, run nr1 credentials:list
nr1 nerdpack:publish [--profile=your_profile_name]
nr1 nerdpack:deploy [-c [DEV|BETA|STABLE]] [--profile=your_profile_name]
nr1 nerdpack:subscribe [-c [DEV|BETA|STABLE]] [--profile=your_profile_name]
```

Visit [https://one.newrelic.com](https://one.newrelic.com), navigate to the Nerdpack, and :sparkles:

## Support

New Relic has open-sourced this project. This project is provided AS-IS WITHOUT WARRANTY OR SUPPORT, although you can report issues and contribute to the project here on GitHub.

_Please do not report issues with this software to New Relic Global Technical Support._
