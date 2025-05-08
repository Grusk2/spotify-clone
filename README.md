# Git Workflow för Playlist App

## Grenstruktur
- main: Stabil och produktionsklar kod.
- development: Aktiv utvecklingsgren.
- features/*: Funktioner och förbättringar.

## Konflikthantering
Vid konflikt löses ändringar manuellt genom att:
1. Öppna filen med konflikten.
2. Ta bort konfliktsymbolerna (<<<<, ====, >>>>).
3. Behålla rätt kod.
4. Lägg till ändringarna och gör en commit.

## Git-kommandon som används
- Skapa gren: git checkout -b <branch>
- Slå ihop gren: git merge <branch>
- Hantera konflikt: manuellt redigera filen
