package main

import "fmt"
import "os"
import "bufio"
import "strconv"

var i64Hex []int64
var sBinary []string

var _ = strconv.Atoi

func main() {
  scanner := bufio.NewScanner(os.Stdin)
  scanner.Scan()
  MESSAGE := scanner.Text()
  
  arrayMessage := []byte(MESSAGE)

  for i := 0; i < range arrayMessage ; i++ {
    i64Hex[i] = int64(arrayMessage[i])
    sBinary[i] = strconv.FormatInt(i64Hex[i], 2)
  }
  
  fmt.Println("0 0 00 0000 0 00")

  // Debug
  fmt.Fprintln(os.Stderr, "ArrayMessage : ", arrayMessage)
  fmt.Fprintln(os.Stderr, "Hexadecimal : ", i64Hex)
  fmt.Fprintln(os.Stderr, "Binary : ", sBinary)
}
