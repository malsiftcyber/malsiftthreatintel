# Contributing to Malsift

Thank you for your interest in contributing to Malsift! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Python 3.11+
- Node.js 18+
- Docker and Docker Compose
- Git

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/malsift.git
   cd malsift
   ```

2. **Set up Development Environment**
   ```bash
   # Backend setup
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   
   # Frontend setup
   cd ../frontend
   npm install
   ```

3. **Configure Environment**
   ```bash
   cp backend/env.example backend/.env
   # Edit backend/.env with your configuration
   ```

4. **Start Development Services**
   ```bash
   # Start database and Redis
   docker-compose up postgres redis -d
   
   # Start backend
   cd backend
   uvicorn app.main:app --reload
   
   # Start frontend (in another terminal)
   cd frontend
   npm start
   ```

## 📝 Development Guidelines

### Code Style

**Python (Backend)**
- Follow PEP 8 style guidelines
- Use type hints for all functions
- Write docstrings for all public functions
- Maximum line length: 88 characters (Black formatter)

**TypeScript/React (Frontend)**
- Use TypeScript strict mode
- Follow ESLint configuration
- Use functional components with hooks
- Prefer named exports over default exports

### Testing

**Backend Tests**
```bash
cd backend
pytest tests/
```

**Frontend Tests**
```bash
cd frontend
npm test
```

### Database Migrations

When modifying database models:

```bash
cd backend
alembic revision --autogenerate -m "Description of changes"
alembic upgrade head
```

## 🐛 Bug Reports

Before reporting a bug:

1. Check existing issues for duplicates
2. Try to reproduce the issue
3. Include:
   - OS and version
   - Malsift version
   - Steps to reproduce
   - Expected vs actual behavior
   - Error logs (if applicable)

## 💡 Feature Requests

When requesting features:

1. Describe the problem you're solving
2. Explain why this feature is needed
3. Provide use cases and examples
4. Consider implementation complexity

## 🔧 Pull Request Process

1. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**
   - Write clear, descriptive commit messages
   - Include tests for new functionality
   - Update documentation as needed

3. **Test Your Changes**
   ```bash
   # Backend tests
   cd backend && pytest
   
   # Frontend tests
   cd frontend && npm test
   
   # Integration tests
   docker-compose up --build
   ```

4. **Submit Pull Request**
   - Use the PR template
   - Describe changes clearly
   - Link related issues
   - Request reviews from maintainers

## 📚 Documentation

When adding new features:

1. **Update API Documentation**
   - Add OpenAPI docstrings to endpoints
   - Update `docs/API.md` if needed

2. **Update README**
   - Add new features to feature list
   - Update installation instructions if needed

3. **Add Code Comments**
   - Explain complex logic
   - Document configuration options

## 🔒 Security

- Never commit API keys or secrets
- Use environment variables for sensitive data
- Follow security best practices
- Report security issues privately

## 🏷️ Release Process

1. **Version Bumping**
   - Update version in `backend/app/core/config.py`
   - Update version in `frontend/package.json`
   - Create git tag

2. **Changelog**
   - Update `CHANGELOG.md` with new features and fixes
   - Include breaking changes if any

3. **Release**
   - Create GitHub release
   - Update Docker images
   - Announce on appropriate channels

## 🤝 Community

- Be respectful and inclusive
- Help other contributors
- Share knowledge and best practices
- Participate in discussions

## 📞 Getting Help

- **Issues**: [GitHub Issues](https://github.com/rebaker501/malsift/issues)
- **Discussions**: [GitHub Discussions](https://github.com/rebaker501/malsift/discussions)
- **Documentation**: [API Docs](http://localhost:8000/docs)

Thank you for contributing to Malsift! 🚀
