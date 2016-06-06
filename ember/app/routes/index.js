import Ember from 'ember';

var chart_options = {
	pointDotRadius: 4,
	scaleOverride: true,
	scaleLineColor: "#D8D8D8",
	scaleSteps: 5,
	scaleStepWidth: 2
};

var my_skills = [
	{
		labels: ["Javascript", "HTML", "CSS", "Java", "C++", "C#", "Python"],
	    datasets: [
			{
				fillColor: "rgba(158,122,194,0.2)",
	            strokeColor: "rgba(158,122,194,1)",
	            pointColor: "rgba(158,122,194,1)",
	            pointStrokeColor: "rgba(255,255,255,1)",
	            pointHighlightFill: "rgba(255,255,255,1)",
	            pointHighlightStroke: "rgba(158,122,194,1)",
				data: [9.0, 9.5, 9.5, 3.5, 3.5, 1.5, 5.0]
			}
		],
		options: chart_options
	},
	{
		labels: ["Node", "jMonkey", "Ember", "Backbone", "Unity"],
	    datasets: [
			{
				fillColor: "rgba(46,109,176,0.2)",
	            strokeColor: "rgba(46,109,176,1)",
	            pointColor: "rgba(46,109,176,1)",
	            pointStrokeColor: "rgba(255,255,255,1)",
	            pointHighlightFill: "rgba(255,255,255,1)",
	            pointHighlightStroke: "rgba(46,109,176,1)",
				data: [6.0, 1.0, 5.0, 6.0, 1.0]
			}
		],
		options: chart_options
	},
	{
		labels: ["Balsamiq", "Moqups", "WebStorm", "Jira", "Confluence", "Slack", "Google"],
	    datasets: [
			{
				fillColor: "rgba(98,156,68,0.2)",
	            strokeColor: "rgba(98,156,68,1)",
	            pointColor: "rgba(98,156,68,1)",
	            pointStrokeColor: "rgba(255,255,255,1)",
	            pointHighlightFill: "rgba(255,255,255,1)",
	            pointHighlightStroke: "rgba(98,156,68,1)",
				data: [10.0, 5.0, 8.0, 6.0, 6.0, 8.0, 7.5]
			}
		],
		options: chart_options
	}
];

// array of organization history
var my_history = [
	{
		name: "Wombat Security Technologies",
		title: "Front End Developer / UI Designer",
		date: {
			from: 2012,
			to: 2016
		},
		accomplishments: [
			"Created mockups, prototypes, and designs for numerous web apps and other interactive UI components; guided by agile processes.",
			"Created initial Automated QA Framework; built on top of Selenium for visual front end testing.",
			"Created responsive front end Interactive Cybersecurity Training Courses.",
			"Applied 508 Compliant HTML.",
			"Gathered user feedback to improve designs.",
			"Heavy use of numerous Atlassian products, primarily Jira & Confluence."
		]
	},
	{
		name: "TwoCastle Software",
		title: "Software Engineer (Unpaid Internship)",
		date: {
			from: 2010,
			to: 2012
		},
		accomplishments: [
			"Constructed 3D spaceship and weapon models in Blender, graphics included.",
			"Created OpenGL shaders.",
			"Programmed scripts for Blender to export 3D models.",
			"Created mockups for game play and features."
		]
	},
	{
		name: "Shawnee State University",
		title: "College Graduate",
		date: {
			from: 2007,
			to: 2012
		},
		accomplishments: [
			"Bachelor's Degree in Game Programming & Design.",
			"Studied C++, C#, Python, Java, Javascript, HTML, & CSS.",
			"Created Game in Python, called \"Disintegris\"; a Tetris-like game.",
			"Developed an educational AI contest game in Python for Shawnee State University’s Artificial Intelligence class.  Students would compete to program a better AI spaceship using a variety of unique techniques."
		]
	},
	{
		name: "Pine-Richland High School",
		title: "High School Graduate",
		date: {
			from: 2003,
			to: 2007
		},
		accomplishments: [
			"Started studying C++, PHP, Javascript, HTML, & CSS.",
			"Studied QBasic freshman year :P",
			"Created an educational HTML and JavaScript board game; this game taught Anglo-Saxon literature and medieval culture."
		]
	}
];

export default Ember.Route.extend({
	model() {
		return {
			my_skills,
			my_history
		};
	}
});
