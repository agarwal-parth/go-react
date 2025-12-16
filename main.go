package main

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
)

func main(){
	fmt.Println("Hello, I am Parth Agarwal!")
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.Status(200).JSON(fiber.Map{"msg": "Trying to run the show!"})
	})

	log.Fatal(app.Listen(":8000"))
}