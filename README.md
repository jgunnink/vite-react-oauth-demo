# Vite, React and OAuth with Google Cloud Identity Platform

This repo is designed to be used as a demo or template to build React applications with Vite, facilitating easy sign in with the
[Google Cloud Identity Platform](https://cloud.google.com/identity-platform)

In short, using the Firebase SDK, you can provide a `apiKey` and `authDomain` to the config (available via the GCP console identity
platform) page, and that's pretty much it. It's all wired up.

If the user is signed in, the app will display their name. If not it will display an error if there is one, or the sign in button to enable
the user to sign in.

PRs, issues, questions, praise, criticism is all welcome.

Enjoy.
