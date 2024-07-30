import { HStack, Link } from "@chakra-ui/react";

export default function BuildStatus() {
  return (
    <HStack>
      <Link href="https://github.com/lfwa/carbontracker/actions">
        <img
          src="https://github.com/lfwa/carbontracker/actions/workflows/publish.yml/badge.svg"
          alt="Build"
        />
      </Link>
      <Link href="https://pypi.org/project/carbontracker/">
        <img
          src="https://img.shields.io/pypi/v/carbontracker?label=PyPI"
          alt="PyPI"
        />
      </Link>
      <Link href="https://www.python.org/downloads/">
        <img
          src="https://img.shields.io/badge/python-%3E%3D3.7-blue"
          alt="Python"
        />
      </Link>
      <Link href="https://github.com/lfwa/carbontracker/actions">
        <img
          alt="Unit Tests"
          src="https://github.com/lfwa/carbontracker/actions/workflows/test.yml/badge.svg"
        />
      </Link>
      <Link href="https://github.com/lfwa/carbontracker/blob/master/LICENSE">
        <img
          src="https://img.shields.io/github/license/lfwa/carbontracker"
          alt="License"
        />
      </Link>
      <Link href="https://pepy.tech/project/carbontracker">
        <img
          src="https://static.pepy.tech/badge/carbontracker"
          alt="Downloads"
        />
      </Link>
    </HStack>
  );
}
