all: format lint-check build sure

# Compile and build.
build:
	npm run build

# Commit to Git.
m=[AUTO]
git: all
	git add -A
	git commit -m '$(m)'
	git push

format:
	prettier --write "src/**"  "!src/packages/**"
	prettier --write "__tests__/**"  "!__tests__/packages/**"

# Checkes if it passes
# the test harnesses.
sure:
	jest

# Linter check.
lint-check:
	npm run lint
