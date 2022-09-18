#!/bin/sh

# Requires [jq](https://stedolan.github.io/jq/):
#
# $ sudo apt update
# $ sudo apt --yes install jq
#

echo 'Photos provided by Pexels <https://www.pexels.com/>'

./bin/list-collections.js > _data/collections.json
for id in $(jq --raw-output '.collections[].id' _data/collections.json); do
    ./bin/get-photos.js $id > _data/photos.$id.json
done

# Remove small collections (usually composed entirely of video)
find _data/ -type f -size -2k -delete
