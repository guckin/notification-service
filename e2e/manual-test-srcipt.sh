trap "exit" INT TERM
trap "kill 0" EXIT

npm run build
npm run start &
sleep 5

curl -X GET -N -H "Accept:text/event-stream" "http://localhost:3000/notifications" &

while true
do
  curl -X POST \
  'http://localhost:3000/notifications' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
        "msg": "Hello World",
        "date": "HEY"
}'
done
