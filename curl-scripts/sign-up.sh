EMAIL="eab2@example.com"
PASSWORD="123"

curl 'https://tic-tac-toe-wdi.herokuapp.com/sign-up' \
  --include --request POST \
     --header 'content-type: application/json' \
     --data '{
     "credentials": {
       "email": "'"${EMAIL}"'",
       "password": "'"${PASSWORD}"'",
       "password_confirmation": "'"${PASSWORD}"'"
     }}'
