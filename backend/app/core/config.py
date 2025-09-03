from pydantic_settings import BaseSettings
from typing import List, Optional
import os


class Settings(BaseSettings):
    """Application settings"""
    
    # Application
    APP_NAME: str = "Cyber Threat Intelligence Platform"
    VERSION: str = "1.0.0"
    DEBUG: bool = False
    
    # Security
    SECRET_KEY: str = "your-secret-key-change-in-production"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # Database
    DATABASE_URL: str = "postgresql://user:password@localhost/cyber_threat_intel"
    
    # Redis
    REDIS_URL: str = "redis://localhost:6379"
    
    # CORS
    ALLOWED_ORIGINS: List[str] = ["http://localhost:3000", "http://localhost:8080"]
    ALLOWED_HOSTS: List[str] = ["localhost", "127.0.0.1"]
    
    # API Rate Limiting
    RATE_LIMIT_PER_MINUTE: int = 60
    RATE_LIMIT_PER_HOUR: int = 1000
    
    # Threat Intelligence Sources
    # CISA
    CISA_API_KEY: Optional[str] = None
    CISA_BASE_URL: str = "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json"
    
    # AlienVault OTX
    OTX_API_KEY: Optional[str] = None
    OTX_BASE_URL: str = "https://otx.alienvault.com/api/v1"
    
    # VirusTotal
    VIRUSTOTAL_API_KEY: Optional[str] = None
    VIRUSTOTAL_BASE_URL: str = "https://www.virustotal.com/vtapi/v2"
    
    # ThreatFox
    THREATFOX_API_KEY: Optional[str] = None
    THREATFOX_BASE_URL: str = "https://threatfox-api.abuse.ch/api/v1"
    
    # MISP
    MISP_API_KEY: Optional[str] = None
    MISP_BASE_URL: Optional[str] = None
    
    # PhishTank
    PHISHTANK_BASE_URL: str = "http://data.phishtank.com/data"
    
    # URLhaus
    URLHAUS_BASE_URL: str = "https://urlhaus-api.abuse.ch/v1"
    
    # Dark Web Sources (Tor)
    TOR_PROXY_URL: Optional[str] = None
    TOR_PROXY_PORT: int = 9050
    
    # Job Processing
    CELERY_BROKER_URL: str = "redis://localhost:6379/0"
    CELERY_RESULT_BACKEND: str = "redis://localhost:6379/0"
    
    # Logging
    LOG_LEVEL: str = "INFO"
    LOG_FILE: str = "logs/app.log"
    
    # Metrics
    ENABLE_METRICS: bool = True
    METRICS_PORT: int = 9090
    
    # Data Retention
    DATA_RETENTION_DAYS: int = 90
    
    # Deduplication
    SIMILARITY_THRESHOLD: float = 0.8
    
    # Free Tier Limits
    VIRUSTOTAL_FREE_LIMIT: int = 4  # requests per minute
    OTX_FREE_LIMIT: int = 10  # requests per minute
    THREATFOX_FREE_LIMIT: int = 5  # requests per minute
    
    class Config:
        env_file = ".env"
        case_sensitive = True


# Create settings instance
settings = Settings()
