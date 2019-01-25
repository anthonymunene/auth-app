#! /bin/bash

mongoimport --host database --db authapp --collection posts --type json --file /seed/seedData.json --jsonArray