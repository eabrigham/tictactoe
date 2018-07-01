# Script not curently working
curl "https://tic-tac-toe-wdi.herokuapp.com/games/:${ID}" \
  --include --request 'PATCH' \
    --header 'content-type: application/json' \
    --header "Authorization: Token token=${TOKEN}" \
    --data '{
      "game": {
        "cell": {
          "index": 0,
          "value": "x"
        },
        "over": "false"
      }
    }'
