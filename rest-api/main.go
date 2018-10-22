package main

func main() {
	db := getDB()
	defer db.Close()
	initializeRoutes(db)
}
