require('dotenv').config();
const Config = require('./config');

module.exports = {
	siteMetadata: {
		title: process.env.SITE_TITLE,
		description: process.env.SITE_DESCRIPTION,
		author: process.env.SITE_AUTHOR,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-graphql`,
			options: {
				typeName: `WPGraphQL`,
				fieldName: `wpgraphql`,
				url: Config.source.url + '/graphql',
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
	],
};
