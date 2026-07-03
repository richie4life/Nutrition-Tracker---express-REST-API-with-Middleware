# Nutrition-Tracker — Express REST API with Middleware and MongoDB

To build a Keto-friendly Nutrition Tracker Application using an Express REST API framework with Middleware integrated with MongoDB.

---

## 🚀 Features
* Full CRUD endpoints for managing keto-friendly foods.
* Custom middleware logic for data validation (e.g., property validation).
* MongoDB persistent database storage layer.

---

## 📌 Table of Contents
* [API Reference & Examples](#-api-reference--examples)
  * [GET - Retrieve All Keto Foods](#1-retrieve-all-keto-foods)
  * [POST - Create a New Keto Food](#2-create-a-new-keto-food)
  * [PUT - Replace a Keto Food Record](#3-replace-an-entire-keto-food-record)
  * [PATCH - Partially Update a Keto Food](#4-partially-update-a-keto-food)
  * [DELETE - Remove a Keto Food](#5-remove-a-keto-food)

---

## 📋 API Reference & Examples

### 1. Retrieve All Keto Foods
Fetches a complete list of all keto-friendly food items currently stored in the tracker.

* **Method:** `GET`
* **URL:** `http://localhost:3000/api/v1/ketoFoods`

```bash
curl --request GET \
  --url http://localhost:3000/api/v1/ketoFoods
```

### 2. Create a New Keto Food
Adds a completely new nutritional record to the database.

* **Method:** `POST`
* **URL:** `http://localhost:3000/api/v1/ketoFoods`

```bash
curl --request POST \
  --url http://localhost:3000/api/v1/ketoFoods \
  --header 'content-type: application/json' \
  --data '{
  "id": 648506,
  "title": "Flat Chicken with bbq Sauce",
  "image": "[https://spoonacular.com/recipeImages/648506-312x231.jpg](https://spoonacular.com/recipeImages/648506-312x231.jpg)",
  "diet": "keto",
  "nutrition": {
    "nutrients": [
      { "name": "Calories", "amount": 520, "unit": "kcal" },
      { "name": "Fat", "amount": 40, "unit": "g" },
      { "name": "Protein", "amount": 30, "unit": "g" },
      { "name": "Net Carbs", "amount": 4, "unit": "g" }
    ]
  },
  "color": "green"
}'
```

### 3. Replace an Entire Keto Food Record
Overwrites or updates an entire food object using its unique resource UUID path parameter.

* **Method:** `PUT`
* **URL:** `http://localhost:3000/api/v1/ketoFoods/:id`

```bash
curl --request PUT \
  --url http://localhost:3000/api/v1/ketoFoods/dd9a1045-a006-4e97-992f-5e6a184c94ff \
  --header 'content-type: application/json' \
  --data '{
  "title": "Steak with bbq Sauce",
  "image": "[https://spoonacular.com/recipeImages/648506-312x231.jpg](https://spoonacular.com/recipeImages/648506-312x231.jpg)",
  "diet": "keto",
  "nutrition": {
    "nutrients": [
      { "name": "Calories", "amount": 650, "unit": "kcal" },
      { "name": "Fat", "amount": 24, "unit": "g" },
      { "name": "Protein", "amount": 40, "unit": "g" },
      { "name": "Net Carbs", "amount": 8, "unit": "g" }
    ]
  },
  "color": "green"
}'
```

### 4. Partially Update a Keto Food
Modifies only specific fields (like the nutritional macro nested structure or color tracking values) of an entry.

* **Method:** `PATCH`
* **URL:** `http://localhost:3000/api/v1/ketoFoods/:id`

```bash
curl --request PATCH \
  --url http://localhost:3000/api/v1/ketoFoods/648506 \
  --header 'content-type: application/json' \
  --data '{
  "nutrition": {
    "nutrients": [
      { "name": "Calories", "amount": 200, "unit": "kcal" },
      { "name": "Fat", "amount": 12, "unit": "g" },
      { "name": "Protein", "amount": 13, "unit": "g" },
      { "name": "Net Carbs", "amount": 6, "unit": "g" }
    ]
  },
  "color": "green"
}'
```

### 5. Remove a Keto Food
Permanently deletes a food tracker record using its unique resource UUID parameter.

* **Method:** `DELETE`
* **URL:** `http://localhost:3000/api/v1/ketoFoods/:id`

```bash
curl --request DELETE \
  --url http://localhost:3000/api/v1/ketoFoods/dd9a1045-a006-4e97-992f-5e6a184c94ff
```