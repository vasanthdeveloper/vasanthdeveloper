#!/usr/bin/env node
/*
 *  Entryfile executable for Vasanth Developer's
 *  command-line portfolio.
 *  Created On 03 May 2021
 */

import cli from './cli/index.js'

// load and parse command line arguments
await cli()
