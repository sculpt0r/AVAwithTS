'use strict';

module.exports = {
    "require": ['source-map-support/register'],
    "typescript": {
        "rewritePaths": {
            "src/": "build/"
        },
        "compile": 'tsc'
    }
};