var getConfig = require('hjs-webpack');

console.log('Build for:',process.env.NODE_ENV)

var config = getConfig({

    in : 'src/index.js',

    out: 'public',

    isDev : process.env.NODE_ENV !== 'production',

    output : {
        hash: true
    },

    devServer: {
      hot: true,
      historyApiFallback: true,
      info: true,
      noInfo: false,
    },

    clearBeforeBuild: false,

     html: function (data) {
        return {
          'index.html': [
            '<html>',
              '<head>',
                '<meta charset="UTF-8">',
                '<link href="https://fonts.googleapis.com/css?family=Raleway:400,300,500,600,700,200,100,800" rel="stylesheet" type="text/css">',
                '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">',
                '<link href="/' + data.css + '" rel="stylesheet" type="text/css" />',
              '</head>',
              '<body>',
                '<div id="root"></div>',
                '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>',
                '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>',
                '<script src="https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.4.0/bootbox.min.js"></script>',
                '<script src="https://checkout.stripe.com/checkout.js"></script>',
                '<script src="/' + data.main + '"></script>',
              '</body>',
            '</html>'
          ].join('')
        }
      }
});

module.exports = config
