# Contributing to Malsift

Thank you for your interest in contributing to Malsift! This document provides guidelines and information for contributors.

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Getting Started

### Prerequisites
- Docker and Docker Compose
- Python 3.9+
- Node.js 18+
- Git

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/your-username/malsiftthreatintel.git
   cd malsiftthreatintel
   ```

2. **Start Development Environment**
   ```bash
   docker-compose up -d
   ```

3. **Install Dependencies**
   ```bash
   # Backend
   cd backend
   pip install -r requirements.txt
   
   # Frontend
   cd frontend
   npm install
   ```

## Development Workflow

### Branch Naming
- `feature/description` - New features
- `bugfix/description` - Bug fixes
- `hotfix/description` - Critical fixes
- `docs/description` - Documentation updates

### Commit Messages
Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): description

[optional body]

[optional footer(s)]
```

Examples:
- `feat(auth): add MFA support`
- `fix(api): resolve authentication token issue`
- `docs(readme): update installation instructions`

### Pull Request Process

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Write clean, documented code
   - Add tests for new functionality
   - Update documentation as needed

3. **Test Your Changes**
   ```bash
   # Backend tests
   cd backend
   pytest
   
   # Frontend tests
   cd frontend
   npm test
   ```

4. **Submit Pull Request**
   - Use the provided PR template
   - Reference any related issues
   - Ensure all checks pass

## Code Standards

### Python (Backend)
- Follow PEP 8 style guidelines
- Use type hints
- Write docstrings for functions and classes
- Maximum line length: 88 characters (Black formatter)

### TypeScript/React (Frontend)
- Use TypeScript for all new code
- Follow ESLint configuration
- Use functional components with hooks
- Write tests with Jest and React Testing Library

### Documentation
- Update README.md for significant changes
- Add/update API documentation
- Include code examples where helpful

## Testing

### Backend Testing
```bash
cd backend
pytest --cov=app --cov-report=html
```

### Frontend Testing
```bash
cd frontend
npm test -- --coverage
```

### Integration Testing
```bash
docker-compose -f docker-compose.test.yml up --abort-on-container-exit
```

## Security

### Reporting Vulnerabilities
**Do not report security vulnerabilities through public GitHub issues.**

Instead, email: security@malsiftcyber.com

### Security Guidelines
- Never commit secrets or API keys
- Use environment variables for configuration
- Follow OWASP security guidelines
- Validate all user inputs

## Documentation

### API Documentation
- Update OpenAPI/Swagger specifications
- Include request/response examples
- Document authentication requirements

### User Documentation
- Update user guides in `docs/`
- Include screenshots for UI changes
- Provide clear installation instructions

## Release Process

### Versioning
We follow [Semantic Versioning](https://semver.org/):
- `MAJOR.MINOR.PATCH`
- `1.0.0` - Initial release
- `1.1.0` - New features
- `1.1.1` - Bug fixes

### Creating Releases
1. Update version numbers
2. Update CHANGELOG.md
3. Create and push tag: `git tag v1.1.0`
4. Push tag: `git push origin v1.1.0`
5. GitHub Actions will create the release

## Community

### Getting Help
- Check existing [Issues](https://github.com/malsiftcyber/malsiftthreatintel/issues)
- Join [Discussions](https://github.com/malsiftcyber/malsiftthreatintel/discussions)
- Email: support@malsiftcyber.com

### Recognition
Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

If you have questions about contributing, please:
1. Check existing documentation
2. Search existing issues
3. Create a new issue with the `question` label
4. Email: contributors@malsiftcyber.com

Thank you for contributing to Malsift! 🚀
