#!make

#--------------------------------------------------------------------------
# The Makefile offers a developer-friendly approach to automate
# the set up of the Vite TypeScript package toolkit.
#
# You can run the following make command:
#
# make local-setup
#--------------------------------------------------------------------------

# The project source code directory.
CODE_DIR=/code

# Include the DotEnv file if it exists.
ifneq (,$(wildcard ./.env))
	include .env
  export
endif

#--------------------------------------------------------------------------
# Makefile targets.
#
# The `local-setup` target executes the Yarn `install`
# command to install package's dependencies.
#--------------------------------------------------------------------------
local-setup:
	exec docker run -it --rm --name vite-toolkit \
		-v $(PWD)${CODE_DIR}:/app \
		-w="/app" \
		node:alpine /bin/sh -c "yarn install --immutable"
