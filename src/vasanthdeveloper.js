#!/usr/bin/env node
/*
 *  Entryfile executable for Vasanth Developer's
 *  command-line portfolio.
 *  Created On 03 May 2021
 */

import axios from 'axios'
import dotenv from 'dotenv'

import cli from './cli/index.js'
import profile from './profile.js'

// load from .env
dotenv.config()

// set the endpoint to be used
axios.defaults.baseURL =
    process.env.VASANTH_ENDPOINT || 'https://api.vasanthdeveloper.com'

// get default profile info
await profile()

// load and parse command line arguments
await cli()
