/**
 * Gets the version of the API to be used in the URL
 * @returns Single digit API version with 'v' prefix obtained from package.json
 */
export const getUrlApiVersion = () => {
    return `v${process.env.npm_package_version.substr(0,1)}`
}

/**
 * Get the version of the API to be used in the documentation
 * @returns Two-digit API version obtained from package.json   
 */
export const getDocApiVersion = () => {
    return process.env.npm_package_version.substr(0,3)
}