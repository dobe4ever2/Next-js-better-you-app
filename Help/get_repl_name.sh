#!/bin/bash

# Function to extract the Repl name from .replit file
get_repl_name() {
  if [ -f .replit ]; then
    # Look for a line starting with "name" in the .replit file
    name_line=$(grep "^name" .replit)
    if [ -n "$name_line" ]; then
      # Extract the value after the "=" sign
      echo "$name_line" | cut -d'=' -f2 | tr -d ' "' | tr -d "'"
    else
      echo "Repl name not found in .replit file"
    fi
  else
    echo ".replit file not found"
  fi
}

# Get the Repl name
REPL_NAME=$(get_repl_name)
echo "Repl name: $REPL_NAME"