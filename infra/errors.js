export class InternalServerError extends Error {
  constructor({ cause, statusCode }) {
    super('Um erro interno não esperado aconteceu.', {
      cause,
    })

    this.name = 'InternalServerError'
    this.action = 'Entre em contato com o suporte.'
    this.statusCode = statusCode || 500
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    }
  }
}

export class ServiceError extends Error {
  constructor({ cause, message }) {
    super(message || 'Serviço indisponível no momento.', {
      cause,
    })

    this.name = 'ServiceError'
    this.action = 'Verifique se o serviço está disponível.'
    this.statusCode = 503
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    }
  }
}

export class ValidationError extends Error {
  constructor({ cause, message, action }) {
    super(message || 'Um erro de validação ocorreu.', {
      cause,
    })

    this.name = 'ValidationError'
    this.action = action || 'Ajuste os dados informados e tente novamente.'
    this.statusCode = 400
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    }
  }
}

export class MethodNotAllowedError extends Error {
  constructor() {
    super('Método não permitido para este endpoint.')

    this.name = 'MethodNotAllowedError'
    this.action =
      'Verifique se o método HTTP utilizado é suportado por este endpoint.'
    this.statusCode = 405
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    }
  }
}
