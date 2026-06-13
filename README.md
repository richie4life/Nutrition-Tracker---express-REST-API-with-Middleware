# Nutrition-Tracker---express-REST-API-with-Middleware and MongoDB Integration
To build a Keto-friendly Nutrition Tracker Application using an Express REST API framework with Middleware Integrated with MongoDB


curl --request GET \
  --url http://localhost:3000/api/v1/ketoFoods


curl --request POST \
  --url http://localhost:3000/api/v1/ketoFoods \
  --header 'content-type: application/json' \
  --data '{
  "id": 648506,
  "title": "Flat Chicken with bbq Sauce",
  "image": "https://spoonacular.com/recipeImages/648506-312x231.jpg",
  "diet": "keto",
  "nutrition": {
    "nutrients": [
      {
        "name": "Calories",
        "amount": 520,
        "unit": "kcal"
      },
      {
        "name": "Fat",
        "amount": 40,
        "unit": "g"
      },
      {
        "name": "Protein",
        "amount": 30,
        "unit": "g"
      },
      {
        "name": "Net Carbs",
        "amount": 4,
        "unit": "g"
      }
    ]
  },
  "color": "green"
}'


curl --request PUT \
  --url http://localhost:3000/api/v1/ketoFoods/dd9a1045-a006-4e97-992f-5e6a184c94ff \
  --header 'content-type: application/json' \
  --data '{
  "title": "Steak with bbq Sauce",
  "image": "https://spoonacular.com/recipeImages/648506-312x231.jpg",
  "diet": "keto",
  "nutrition": {
    "nutrients": [
      {
        "name": "Calories",
        "amount": 650,
        "unit": "kcal"
      },
      {
        "name": "Fat",
        "amount": 24,
        "unit": "g"
      },
      {
        "name": "Protein",
        "amount": 40,
        "unit": "g"
      },
      {
        "name": "Net Carbs",
        "amount": 8,
        "unit": "g"
      }
    ]
  },
  "color": "green"
}'


curl --request DELETE \
  --url http://localhost:3000/api/v1/ketoFoods/dd9a1045-a006-4e97-992f-5e6a184c94ff


curl --request PATCH \
  --url http://localhost:3000/api/v1/ketoFoods/648506 \
  --header 'content-type: application/json' \
  --data '{
  "nutrition": {
    "nutrients": [
      {
        "name": "Calories",
        "amount": 200,
        "unit": "kcal"
      },
      {
        "name": "Fat",
        "amount": 12,
        "unit": "g"
      },
      {
        "name": "Protein",
        "amount": 13,
        "unit": "g"
      },
      {
        "name": "Net Carbs",
        "amount": 6,
        "unit": "g"
      }
    ]
  },
  "color": "green"
}'


