#include <iostream>
#include <cctype>
#include <array>
using namespace std;

int getDigit(string const& line, int pos) {
  array<string, 20> substrings({
      "0", "zero",
      "1", "one",
      "2", "two",
      "3", "three",
      "4", "four",
      "5", "five",
      "6", "six",
      "7", "seven",
      "8", "eight",
      "9", "nine",
  });

  auto word = line.substr(pos);
  for (int i = 0; i < static_cast<int>(substrings.size()); i++)
    if (word.starts_with(substrings[i]))
      return i / 2;

  return -1;
}

int main(int argc, const char** argv) {
  printf("hi\n");
#if 0
  string line;
  int sum = 0;
  while (getline(cin, line)) {
    int f = -1;
    int l = -1;
    for (size_t i = 0; i < line.length(); i++) {
      if (isdigit(line[i])) {
        f = line[i] - '0';
        break;
      }
    }

    for (int i = static_cast<int>(line.length() - 1); i >= 0; i--) {
      if (isdigit(line[i])) {
        l = line[i] - '0';
        break;
      }
    }

    if (f < 0 || l < 0) {
      printf("f=%d l=%d for %s\n", f, l, line.c_str());
      return 1;
    }

    int total = f * 10 + l;
    printf("%s: %d\n", line.c_str(), total);
    sum += total;
  }

  printf("Sum: %d\n", sum);
  return 0;
#endif

  string line;
  int sum = 0;
  while (getline(cin, line)) {
    int f = -1;
    int l = -1;
    for (size_t i = 0; i < line.length(); i++) {
      int digit = getDigit(line, i);
      if (digit >= 0) {
        f = digit;
        break;
      }
    }

    for (int i = static_cast<int>(line.length() - 1); i >= 0; i--) {
      int digit = getDigit(line, i);
      if (digit >= 0) {
        l = digit;
        break;
      }
    }

    if (f < 0 || l < 0) {
      printf("f=%d l=%d for %s\n", f, l, line.c_str());
      return 1;
    }

    int total = f * 10 + l;
    printf("%s: %d\n", line.c_str(), total);
    sum += total;
  }

  printf("Sum: %d\n", sum);
  return 0;
}
