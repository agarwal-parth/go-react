package main

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
)

type Todo struct {
	ID        int    `json:"id"`
	Completed bool   `json:"completed"`
	Body      string `json:"body"`
}

func main() {
	fmt.Println("Hello, I am Parth Agarwal!")
	app := fiber.New()

	app.Get("/api/todos", func(c *fiber.Ctx) error {
		return c.Status(200).JSON(fiber.Map{"msg": "Trying to run the show!"})
	})

	todos := []Todo{}

	app.Post("/api/todos", func(c *fiber.Ctx) error {
		todo := &Todo{}

		err := c.BodyParser(todo)
		if err != nil {
			return err
		}

		if todo.Body == "" {
			return c.Status(400).JSON(fiber.Map{"msg": "Todo cannot be empty!"})
		}

		todo.ID = len(todos) + 1
		todos = append(todos, *todo)

		return c.Status(201).JSON(todo)
	})

	log.Fatal(app.Listen(":8000"))
}
