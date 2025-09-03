# Changelog

All notable changes to Malsift will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial release of Malsift
- Multi-source threat intelligence aggregation
- Advanced deduplication system with intelligent normalization
- Dark web monitoring with Tor integration
- Indicator exclusion system with pattern matching
- Modern React + TypeScript frontend
- Comprehensive REST API with FastAPI
- Docker containerization with Docker Compose
- Prometheus metrics and Grafana dashboards
- Background job processing with Celery

### Supported Sources
- **Government**: CISA Known Exploited Vulnerabilities
- **Open Source**: AlienVault OTX, MISP, OpenPhish, PhishTank, URLhaus
- **Commercial**: VirusTotal, ThreatFox, IBM X-Force Exchange, Recorded Future, CrowdStrike Falcon

### Features
- Real-time dashboard with threat intelligence statistics
- Advanced filtering and search capabilities
- Feed management interface
- Job monitoring and status tracking
- Pattern testing for exclusions
- Bulk import/export functionality
- Rate limiting and free tier optimization
- Comprehensive API documentation

## [1.0.0] - 2024-01-15

### Added
- Initial release of Malsift
- Complete threat intelligence aggregation platform
- Full-stack application with backend and frontend
- Docker deployment support
- Comprehensive documentation

### Technical Stack
- **Backend**: FastAPI, PostgreSQL, Redis, Celery
- **Frontend**: React, TypeScript, Tailwind CSS
- **Monitoring**: Prometheus, Grafana
- **Deployment**: Docker, Docker Compose

---

## Version History

- **1.0.0**: Initial release with core functionality
- **Unreleased**: Future features and improvements

## Contributing

To add entries to this changelog:

1. Add your changes under the appropriate section
2. Use the following categories:
   - **Added**: New features
   - **Changed**: Changes in existing functionality
   - **Deprecated**: Soon-to-be removed features
   - **Removed**: Removed features
   - **Fixed**: Bug fixes
   - **Security**: Security improvements

3. Include a brief description of the change
4. Reference any related issues or pull requests
