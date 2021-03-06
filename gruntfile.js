module.exports = function(grunt){
	grunt.initConfig({
		files:{
			html:{
				src:"app/index.html",
				dev:"generated/index.html"
			},
			js:{
				src:["app/js/app.js","app/js/**/*.js"],
				vendors:["bower_components/jquery/dist/jquery.min.js"]
			}
		},
		copy:{
			html:{
				files:[{
					src:"<%=files.html.src%>",
					dest:"<%=files.html.dev%>"
				}]
			}
		},
		concat:{
			js:{
				src:["<%=files.js.vendors%>","<%=files.js.src%>"],
				dest:"generated/js/app.min.js"
			}
		}
	});
	require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.registerTask("default",["copy:html","concat:js"]);
}