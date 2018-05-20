// This file mimics the manual command line processing to allow for scalability

module.exports = {

  // Argument one -- location of the web app's root file
  entry: './app/app.jsx',
  // Argument two -- location and name for bundle
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },

  resolve: {
    // Gives you the path that you are currently in
    root: __dirname,

    // Define the locations and names of each component
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
    },

    // The types of file extensions that we want to work with
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        // Defines loaders for handling .jsx
        loader: 'babel-loader',
        // Parse them through react and run that output through es2015
        query: {
          presets: ['react', 'es2015']
        },
        // Regular expressions for selecting any file with the .jsx suffix
        test: /\.jsx?$/,
        // Ignore these directories when using the loader
        exclude: /(node_modules|bowers_components)/
      }
    ]
  },
  // For debugging with source maps
  devtool: 'eval-source-map'
};
