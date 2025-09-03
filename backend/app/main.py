from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from contextlib import asynccontextmanager
import uvicorn
from loguru import logger

from app.core.config import settings
from app.api.v1.api import api_router
from app.core.database import engine, Base
from app.services.metrics import setup_metrics


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifespan events"""
    # Startup
    logger.info("Starting Cyber Threat Intelligence Platform")
    
    # Create database tables
    Base.metadata.create_all(bind=engine)
    
    # Setup metrics
    setup_metrics()
    
    logger.info("Application startup complete")
    yield
    
    # Shutdown
    logger.info("Shutting down Cyber Threat Intelligence Platform")


def create_app() -> FastAPI:
    """Create and configure the FastAPI application"""
    app = FastAPI(
        title="Cyber Threat Intelligence Platform",
        description="A comprehensive platform for aggregating and managing cyber threat intelligence from multiple sources",
        version="1.0.0",
        docs_url="/docs",
        redoc_url="/redoc",
        lifespan=lifespan
    )
    
    # Security middleware
    app.add_middleware(
        TrustedHostMiddleware,
        allowed_hosts=settings.ALLOWED_HOSTS
    )
    
    # CORS middleware
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.ALLOWED_ORIGINS,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    
    # Include API routes
    app.include_router(api_router, prefix="/api/v1")
    
    # Health check endpoint
    @app.get("/health")
    async def health_check():
        return {"status": "healthy", "service": "cyber-threat-intel"}
    
    # Root endpoint
    @app.get("/")
    async def root():
        return {
            "message": "Cyber Threat Intelligence Platform API",
            "version": "1.0.0",
            "docs": "/docs",
            "health": "/health"
        }
    
    return app


app = create_app()


if __name__ == "__main__":
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )
