from bruhcolor import bruhcolored as color
import subprocess


def main():
    print(color("\nCREATE VITE x TAILWIND APP", color="123", attrs=["bold"]))
    project = input(color("Enter project name: ", color="yellow"))
    language = input(color("Enter language [ts, js]: ", color="yellow"))
    while language != "ts" and language != "js":
        language = input(color("Enter language [ts, js]: ", color="yellow"))
    language = "react" if language == "js" else "react-ts"
    result = subprocess.run(["create", language, project],
                            shell=True, capture_output=True, text=True)
    print(result.stderr, result.stdout)
    # result = subprocess.run(["npm", "create", "vite@latest", project, "--", "--template", language], shell=True,
    #                         capture_output=True, text=True)
    # if result.returncode == 0:
    #     print("Made app!")
    #     tailwind = subprocess.run(
    #         ["cd", project, "&&", "dir"], shell=True, capture_output=True, text=True)
    #     print(tailwind.stdout, tailwind.stderr)


if __name__ == "__main__":
    main()
