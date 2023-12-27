resolve: {
  // ... other resolve configurations

  fallback: {
    assert: require.resolve("assert/")
  }
}