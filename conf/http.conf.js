rapid.config.define({

	"rapid-httpserver" : {

		autoStart : true,

		loading_dir : ["/app/actions/"],

		gzip : true,

		port : 18080,

		/* "Cache-Control" : "max-age:31536000" */
		filter : [{
			url : /^\/assets\/(.*)/,
			doFilter : "addHeaders",
			params : {
				"Cache-Control" : "max-age:0"
			}
		}],

		mapping : [{
			url : /^\/favicon.ico$/,
			resource : "/favicon.png"
		},{
			url : /^\/assets\/(.*)/,
			resource : "/app/assets/{1}"
		},{
			url : /^\/md\/images\/(.*)/,
			resource : "/app/md/images/{1}"
		},{
			url : /^\/rapid(\/.*)?/,
			doAction : "rapid"
		},{
			url : /^\/blendui(\/.*)?/,
			doAction : "blendui"
		},{
			url : /^\/blendapi(\/.*)?/,
			doAction : "blendapi"
		},{
			url : /^\/runtime(\/.*)?/,
			doAction : "runtime"
		},{
			url : /^\/$/,
			doAction : "index"
		},{
			url : /^\/404/,
			doAction : "404"
		}],

		defaultAction : "404"
	}

});