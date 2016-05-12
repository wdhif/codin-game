package main

import (
	"fmt"
	"os"
)

func main() {
    for {
    	var colorA, colorB int
		var array [8]int
        for i := 0; i < 8; i++ {
            fmt.Scan(&colorA, &colorB)
            array[i] = colorA
        }
        for i := 0; i < 12; i++ {
            var row string
            fmt.Scan(&row)
        }
        for i := 0; i < 12; i++ {
            var row string
            fmt.Scan(&row)
        }
        
        fmt.Fprintln(os.Stderr, "ColorA =" , colorA)
        fmt.Fprintln(os.Stderr, "ColorB =" , colorB)
		switch array[0] {
            case 1:
                fmt.Printf("0\n")
            case 2:
                fmt.Printf("1\n")
            case 3:
                fmt.Printf("2\n")
            case 4:
                fmt.Printf("3\n")
            case 5:
                fmt.Printf("4\n")   
        }
    }
}
