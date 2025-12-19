#!/usr/bin/env bash

set -euo pipefail

IMAGE="${IMAGE:-md:local}"
PLATFORMS="${PLATFORMS:-}"
PUSH="${PUSH:-0}"
LOAD="${LOAD:-0}"

if [[ -n "$PLATFORMS" ]]; then
  args=(docker buildx build --platform "$PLATFORMS" -f docker/Dockerfile -t "$IMAGE")

  if [[ "$PUSH" == "1" ]]; then
    args+=(--push)
  fi

  if [[ "$LOAD" == "1" ]]; then
    args+=(--load)
  fi

  args+=(.)
  "${args[@]}"
else
  docker build -f docker/Dockerfile -t "$IMAGE" .
fi
