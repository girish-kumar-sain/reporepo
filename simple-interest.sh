#!/bin/bash

# simple-interest.sh
# A simple shell script to calculate simple interest.
#
# Usage:
#   ./simple-interest.sh [principal] [rate] [time]
#   or
#   ./simple-interest.sh (will prompt for input)

# --- Function to calculate simple interest ---
calculate_interest() {
    principal=$1
    rate=$2
    time=$3

    # Using 'bc' for floating-point arithmetic
    # I = P * R * T / 100
    interest=$(echo "scale=2; $principal * $rate * $time / 100" | bc)
    
    echo "----------------------------------------"
    echo "Calculating Simple Interest..."
    echo "----------------------------------------"
    echo "Principal Amount (P):  $principal"
    echo "Annual Rate (R):       $rate%"
    echo "Time in Years (T):     $time"
    echo "----------------------------------------"
    echo "Simple Interest (I):   $interest"
    echo "----------------------------------------"
}

# --- Main script execution ---

# Check if arguments are provided
if [ "$#" -eq 3 ]; then
    # Use command-line arguments
    p=$1
    r=$2
    t=$3
    calculate_interest $p $r $t
else
    # Prompt user for input
    echo "Please enter the following details:"
    
    read -p "Enter the principal amount: " principal
    read -p "Enter the annual interest rate (e.g., 5 for 5%): " rate
    read -p "Enter the time period in years: " time
    
    # Basic validation to ensure inputs are not empty
    if [ -z "$principal" ] || [ -z "$rate" ] || [ -z "$time" ]; then
        echo "Error: All inputs are required. Please try again."
        exit 1
    fi
    
    calculate_interest $principal $rate $time
fi
