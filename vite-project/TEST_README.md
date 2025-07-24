# Spanish Flashcards - Testing Documentation

This document provides comprehensive information about the testing setup and test files for the Spanish Flashcards application.

## 📋 Table of Contents

- [Overview](#overview)
- [Testing Stack](#testing-stack)
- [Unit & Integration Tests (Jest + React Testing Library)](#unit--integration-tests)
- [End-to-End Tests (Playwright)](#end-to-end-tests)
- [Running Tests](#running-tests)
- [Test Coverage](#test-coverage)
- [Test Files Structure](#test-files-structure)
- [Best Practices](#best-practices)

## 🎯 Overview

The Spanish Flashcards application includes a comprehensive testing suite covering:
- **Unit Tests**: Individual component behavior
- **Integration Tests**: Component interactions and user flows
- **End-to-End Tests**: Full user journeys across browsers
- **Accessibility Tests**: Keyboard navigation and screen reader support

## 🛠️ Testing Stack

### Unit & Integration Testing
- **Jest**: Test runner and assertion library
- **React Testing Library**: Component testing utilities
- **@testing-library/jest-dom**: Custom Jest matchers
- **ts-jest**: TypeScript support for Jest

### End-to-End Testing
- **Playwright**: Cross-browser E2E testing
- **Multiple Browsers**: Chromium, Firefox, WebKit

## 🧪 Unit & Integration Tests

### Configuration Files
- `jest.config.cjs`: Jest configuration with TypeScript support
- `jest.setup.ts`: Global test setup and polyfills
- `tsconfig.test.json`: TypeScript configuration for tests

### Test Files

#### 1. `src/components/__tests__/Flashcard.test.tsx`
**Purpose**: Test the core Flashcard component functionality

**Test Cases**:
- ✅ Renders Spanish word by default
- ✅ Flips to show English translation on click
- ✅ Calls `onRight` callback when Right button is clicked
- ✅ Calls `onWrong` callback when Wrong button is clicked
- ✅ Uses `data-testid` for reliable element targeting

**Key Features**:
- Tests component state management
- Verifies user interactions
- Ensures proper callback handling

#### 2. `src/pages/__tests__/StudyPage.test.tsx`
**Purpose**: Test the complete study mode user flow

**Test Cases**:
- ✅ Shows correct number of cards
- ✅ Shows "Great job" message when all cards are marked right
- ✅ Shows results message for mixed correct/wrong answers
- ✅ Shows skipped message when only Next is clicked

**Key Features**:
- Tests complete user journeys
- Verifies different completion scenarios
- Tests state management across multiple cards

#### 3. `src/__tests__/AppNavigation.test.tsx`
**Purpose**: Test navigation between different pages

**Test Cases**:
- ✅ Navigates to Study Mode
- ✅ Navigates to Quiz Mode
- ✅ Navigates to Stats Page

**Key Features**:
- Uses mocked `useNavigate` to avoid Router conflicts
- Tests navigation callbacks
- Verifies proper routing behavior

### Running Unit Tests
```bash
# Run all unit tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## 🌐 End-to-End Tests

### Configuration
- `playwright.config.ts`: Playwright configuration with multiple browsers
- `tests/`: Directory containing all E2E test files

### Test Files

#### 1. `tests/home-page.spec.ts`
**Purpose**: Test home page functionality and navigation

**Test Cases**:
- ✅ Displays welcome message and title
- ✅ Shows all navigation buttons
- ✅ Navigates to Study Mode
- ✅ Navigates to Quiz Mode
- ✅ Navigates to Stats Page

#### 2. `tests/study-mode.spec.ts`
**Purpose**: Comprehensive testing of study mode functionality

**Test Cases**:
- ✅ Category selection page display
- ✅ Animals category study flow
  - Card display and flipping
  - "Great job" completion scenario
  - Mixed results scenario
  - Skipped cards scenario
  - Navigation back to home
- ✅ Food category study flow
- ✅ Verbs category study flow

#### 3. `tests/navigation.spec.ts`
**Purpose**: Test navigation and routing behavior

**Test Cases**:
- ✅ Browser back/forward navigation
- ✅ Direct URL access to different pages
- ✅ Invalid route handling
- ✅ State management during navigation

#### 4. `tests/accessibility.spec.ts`
**Purpose**: Test accessibility features

**Test Cases**:
- ✅ Keyboard navigation support
- ✅ Button activation with Enter/Space keys
- ✅ Proper heading structure
- ✅ Button labels and focus management

### Running E2E Tests
```bash
# Run all E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui

# Run E2E tests in headed mode (visible browser)
npm run test:e2e:headed

# Run E2E tests in debug mode
npm run test:e2e:debug
```

## 🚀 Running Tests

### Prerequisites
```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Available Test Scripts
```bash
# Unit & Integration Tests
npm test                    # Run Jest tests
npm test -- --watch        # Watch mode
npm test -- --coverage     # With coverage

# End-to-End Tests
npm run test:e2e           # Run all E2E tests
npm run test:e2e:ui        # Run with Playwright UI
npm run test:e2e:headed    # Run with visible browser
npm run test:e2e:debug     # Debug mode
```

## 📊 Test Coverage

### Current Coverage Areas
- **Components**: Flashcard component (100%)
- **Pages**: StudyPage, HomePage navigation (100%)
- **User Flows**: Complete study mode journey (100%)
- **Navigation**: All routing scenarios (100%)
- **Accessibility**: Keyboard navigation (100%)

### Test Statistics
- **Unit Tests**: 11 tests across 3 test suites
- **E2E Tests**: 25+ tests across 4 test files
- **Browsers**: Chromium, Firefox, WebKit
- **Coverage**: All Phase 2 functionality covered

## 📁 Test Files Structure

```
vite-project/
├── src/
│   ├── components/
│   │   └── __tests__/
│   │       └── Flashcard.test.tsx
│   ├── pages/
│   │   └── __tests__/
│   │       └── StudyPage.test.tsx
│   └── __tests__/
│       └── AppNavigation.test.tsx
├── tests/
│   ├── home-page.spec.ts
│   ├── study-mode.spec.ts
│   ├── navigation.spec.ts
│   └── accessibility.spec.ts
├── jest.config.cjs
├── jest.setup.ts
├── tsconfig.test.json
└── playwright.config.ts
```

## ✅ Best Practices Implemented

### Unit Testing
- **Component Isolation**: Each component tested independently
- **User-Centric Testing**: Tests focus on user behavior, not implementation
- **Reliable Selectors**: Use `data-testid` for stable element targeting
- **Mocking**: Proper mocking of external dependencies

### E2E Testing
- **Real User Scenarios**: Tests mirror actual user workflows
- **Cross-Browser Testing**: Tests run on multiple browsers
- **Accessibility Testing**: Keyboard navigation and screen reader support
- **Error Handling**: Tests for edge cases and error scenarios

### Test Organization
- **Clear Naming**: Descriptive test names that explain the scenario
- **Logical Grouping**: Related tests grouped in describe blocks
- **Setup/Teardown**: Proper test isolation with beforeEach/afterEach
- **Documentation**: Comprehensive comments explaining test logic

## 🔧 Troubleshooting

### Common Issues

#### Jest Tests
```bash
# Clear Jest cache
npm test -- --clearCache

# Run with verbose output
npm test -- --verbose
```

#### Playwright Tests
```bash
# Install browsers if missing
npx playwright install

# Show test results
npx playwright show-report

# Debug specific test
npx playwright test --debug tests/study-mode.spec.ts
```

### Debugging Tips
1. **Unit Tests**: Use `console.log` or debugger statements
2. **E2E Tests**: Use `--headed` flag to see browser actions
3. **Screenshots**: Failed E2E tests automatically capture screenshots
4. **Traces**: Use `--trace on` for detailed execution traces

## 📈 Future Enhancements

### Planned Test Additions
- **Quiz Mode Tests**: When quiz functionality is implemented
- **Stats Tracking Tests**: When statistics are added
- **Redo Mode Tests**: When redo functionality is implemented
- **Performance Tests**: Load testing for larger flashcard sets
- **Visual Regression Tests**: UI consistency across changes

### Test Maintenance
- **Regular Updates**: Keep test dependencies updated
- **Coverage Monitoring**: Track test coverage metrics
- **Test Review**: Regular review of test effectiveness
- **Documentation Updates**: Keep this README current

---

## 📝 Notes

- All tests are designed to be **maintainable** and **readable**
- Tests follow **AAA pattern** (Arrange, Act, Assert)
- **Accessibility** is considered in all test scenarios
- Tests are **fast** and **reliable** for CI/CD integration
- **Cross-browser compatibility** is verified through E2E tests

For questions or issues with testing, refer to the test files or run tests with debug flags for detailed information. 