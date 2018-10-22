package main

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq"
)

func getDB() *sql.DB {
	connection := "postgres://postgres:root@127.0.0.1:5432/recipes?sslmode=disable"
	db, err := sql.Open("postgres", connection)
	if err != nil {
		log.Fatal(err)
	}
	return db
}
