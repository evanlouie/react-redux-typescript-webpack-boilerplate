module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "./dist/bundle.js",
    },
    resolve: {
        extensions: [
            '.ts', '.tsx',
            '.js', '.jsx'
        ],
    },
    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader' then 'babel-loader'.
            {
                test: /\.tsx?$/,
                loader: 'babel-loader!ts-loader',
            }
        ],
    }
}
