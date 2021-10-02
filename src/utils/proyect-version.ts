export const getUrlApiVersion = () => {
    return `v${process.env.npm_package_version.substr(0,1)}`
}

export const getDocApiVersion = () => {
    return process.env.npm_package_version.substr(0,3)
}